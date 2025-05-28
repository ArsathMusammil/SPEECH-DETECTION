function startRecognition() {
    const output = document.getElementById('output');

    if (!('webkitSpeechRecognition' in window)) {
        output.innerHTML = 'Sorry, your browser does not support speech recognition.';
        return;
    }

    const recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
        output.innerHTML = '<em>Listening...</em>';
    };

    recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
            transcript += event.results[i][0].transcript;
        }
        output.innerHTML = transcript;
    };

    recognition.onerror = (event) => {
        output.innerHTML = 'Error occurred: ' + event.error;
    };

    recognition.start();
}
