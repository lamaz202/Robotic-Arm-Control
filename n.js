let recognition;
let finalTranscript = '';

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resultDiv = document.getElementById('result');

startButton.addEventListener('click', startRecording);
stopButton.addEventListener('click', stopRecording);

function startRecording() {
  finalTranscript = '';
  recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  recognition.onresult = (event) => {
    let interimTranscript = '';
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript + ' ';
      } else {
        interimTranscript += transcript;
      }
    }

    // Display interim and final results
    resultDiv.innerHTML = `<p>${interimTranscript}</p>`;
    resultDiv.innerHTML += `<p><strong>${finalTranscript}</strong></p>`;
  };

  recognition.onstart = () => {
    startButton.disabled = true;
    stopButton.disabled = false;
  };

  recognition.onend = () => {
    startButton.disabled = false;
    stopButton.disabled = true;
  };

  recognition.start();
}

function stopRecording() {
  if (recognition) {
    recognition.stop();
    recognition = null;
  }
}