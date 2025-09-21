// Wheel of Fortune Quiz Game
class WheelOfFortune {
    constructor() {
        this.canvas = document.getElementById('wheelCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.spinBtn = document.getElementById('spinBtn');
        this.segmentCount = 80;
        this.isSpinning = false;
        this.rotation = 0;
        this.targetRotation = 0;
        this.selectedNumber = 0;
        
        // Colors for the wheel segments
        this.colors = [
            '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
            '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F',
            '#BB8FCE', '#85C1E9', '#F8C471', '#82E0AA'
        ];
        
        this.init();
    }
    
    init() {
        this.drawWheel();
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        this.spinBtn.addEventListener('click', () => this.spin());
        
        document.getElementById('segmentCount').addEventListener('input', (e) => {
            const newCount = parseInt(e.target.value);
            if (newCount >= 10 && newCount <= 100) {
                this.segmentCount = newCount;
            }
        });
        
        document.getElementById('updateWheel').addEventListener('click', () => {
            this.drawWheel();
        });
        
        document.getElementById('goToQuestion').addEventListener('click', () => {
            this.showQuestion();
        });
        
        document.getElementById('spinAgain').addEventListener('click', () => {
            this.hideCongrats();
        });
        
        document.getElementById('backToWheel').addEventListener('click', () => {
            this.backToWheel();
        });
        
        document.getElementById('nextQuestion').addEventListener('click', () => {
            this.nextQuestion();
        });
    }
    
    drawWheel() {
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const radius = 180;
        const anglePerSegment = (Math.PI * 2) / this.segmentCount;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        for (let i = 0; i < this.segmentCount; i++) {
            const startAngle = i * anglePerSegment;
            const endAngle = (i + 1) * anglePerSegment;
            const colorIndex = i % this.colors.length;
            
            // Draw segment
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, radius, startAngle, endAngle);
            this.ctx.lineTo(centerX, centerY);
            this.ctx.fillStyle = this.colors[colorIndex];
            this.ctx.fill();
            
            // Draw border
            this.ctx.strokeStyle = '#fff';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            
            // Draw number
            const textAngle = startAngle + anglePerSegment / 2;
            const textRadius = radius - 30;
            const textX = centerX + Math.cos(textAngle) * textRadius;
            const textY = centerY + Math.sin(textAngle) * textRadius;
            
            this.ctx.save();
            this.ctx.translate(textX, textY);
            this.ctx.rotate(textAngle + Math.PI / 2);
            this.ctx.fillStyle = '#fff';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(i + 1, 0, 0);
            this.ctx.restore();
        }
    }
    
    spin() {
        if (this.isSpinning) return;
        
        this.isSpinning = true;
        this.spinBtn.disabled = true;
        this.spinBtn.textContent = 'SPINNING...';
        
        // Generate random rotation (multiple full rotations + random angle)
        const minSpins = 5;
        const maxSpins = 10;
        const spins = minSpins + Math.random() * (maxSpins - minSpins);
        const finalAngle = Math.random() * Math.PI * 2;
        this.targetRotation = this.rotation + (spins * Math.PI * 2) + finalAngle;
        
        this.animateSpin();
    }
    
    animateSpin() {
        const duration = 3000; // 3 seconds
        const startTime = Date.now();
        const startRotation = this.rotation;
        const totalRotation = this.targetRotation - startRotation;
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);
            
            this.rotation = startRotation + totalRotation * easeOut;
            
            // Apply rotation to canvas
            this.ctx.save();
            this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
            this.ctx.rotate(this.rotation);
            this.ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2);
            
            this.drawWheel();
            this.ctx.restore();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                this.onSpinComplete();
            }
        };
        
        animate();
    }
    
    onSpinComplete() {
        this.isSpinning = false;
        this.spinBtn.disabled = false;
        this.spinBtn.textContent = 'SPIN!';
        
        // Calculate which segment was selected
        const normalizedRotation = (this.rotation % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        const anglePerSegment = (Math.PI * 2) / this.segmentCount;
        
        // Adjust for pointer position (top of wheel)
        const adjustedAngle = (Math.PI * 2 - normalizedRotation + Math.PI / 2) % (Math.PI * 2);
        const segmentIndex = Math.floor(adjustedAngle / anglePerSegment);
        
        this.selectedNumber = segmentIndex + 1;
        this.showCongrats();
    }
    
    showCongrats() {
        document.getElementById('selectedNumber').textContent = this.selectedNumber;
        document.getElementById('congratsScreen').classList.remove('hidden');
        
        // Add confetti effect
        this.createConfetti();
    }
    
    hideCongrats() {
        document.getElementById('congratsScreen').classList.add('hidden');
    }
    
    showQuestion() {
        const question = getQuestionById(this.selectedNumber);
        if (!question) {
            alert('Question not found!');
            return;
        }
        
        document.getElementById('questionNumber').textContent = `Question ${question.id}`;
        document.getElementById('questionText').textContent = question.question;
        
        const optionsContainer = document.getElementById('answerOptions');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'answer-option';
            optionElement.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
            optionElement.addEventListener('click', () => this.selectAnswer(index, question.correct));
            optionsContainer.appendChild(optionElement);
        });
        
        document.getElementById('result').classList.add('hidden');
        document.getElementById('congratsScreen').classList.add('hidden');
        document.getElementById('wheelContainer').classList.add('hidden');
        document.getElementById('questionScreen').classList.remove('hidden');
    }
    
    selectAnswer(selectedIndex, correctIndex) {
        const options = document.querySelectorAll('.answer-option');
        const resultDiv = document.getElementById('result');
        const resultText = document.getElementById('resultText');
        
        // Disable all options
        options.forEach(option => {
            option.style.pointerEvents = 'none';
        });
        
        // Highlight selected answer
        options[selectedIndex].classList.add('selected');
        
        setTimeout(() => {
            // Show correct/incorrect answers
            options[correctIndex].classList.add('correct');
            if (selectedIndex !== correctIndex) {
                options[selectedIndex].classList.add('incorrect');
            }
            
            // Show result
            if (selectedIndex === correctIndex) {
                resultDiv.className = 'result correct';
                resultText.textContent = '🎉 Correct! Well done!';
            } else {
                resultDiv.className = 'result incorrect';
                resultText.textContent = `❌ Incorrect. The correct answer was ${String.fromCharCode(65 + correctIndex)}.`;
            }
            
            resultDiv.classList.remove('hidden');
        }, 1000);
    }
    
    nextQuestion() {
        // Get a random question for next
        let nextQuestionNumber;
        do {
            nextQuestionNumber = Math.floor(Math.random() * this.segmentCount) + 1;
        } while (nextQuestionNumber === this.selectedNumber);
        
        this.selectedNumber = nextQuestionNumber;
        this.showQuestion();
    }
    
    backToWheel() {
        document.getElementById('questionScreen').classList.add('hidden');
        document.getElementById('wheelContainer').classList.remove('hidden');
    }
    
    createConfetti() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.top = '-10px';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = '50%';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '9999';
                confetti.style.animation = 'fall 3s linear forwards';
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, 3000);
            }, i * 50);
        }
    }
}

// CSS animation for confetti
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WheelOfFortune();
});