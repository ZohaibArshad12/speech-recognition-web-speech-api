// import classNamees from './SpeechRecognition.module.scss';
import React, { useEffect } from 'react';

let speechRecognition = null;
let finalTranscript = null;

const SpeechRecognition = () => {
  // const [finalTranscript, setFinalTranscript] = useState('');

  useEffect(() => {
    if (window.webkitSpeechRecognition) {
      speechRecognition = new window.webkitSpeechRecognition();

      speechRecognition.continuous = true;
      speechRecognition.interimResults = true;
      // speechRecognition.lang = document.querySelector('#select_dialect').value;

      speechRecognition.onstart = () => {
        finalTranscript = '';
        document.querySelector('#status').style.display = 'block';
      };
      speechRecognition.onerror = () => {
        document.querySelector('#status').style.display = 'none';
        console.log('Speech Recognition Error');
      };
      speechRecognition.onend = () => {
        document.querySelector('#status').style.display = 'none';
        console.log('Speech Recognition Ended');
      };

      speechRecognition.onresult = (event) => {
        let interim_transcript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            console.log('finalTranscript::', finalTranscript);

            finalTranscript += event.results[i][0].transcript;

            // setFinalTranscript(
            //   finalTranscript + event.results[i][0].transcript
            // );
          } else {
            interim_transcript += event.results[i][0].transcript;
          }
        }
        document.querySelector('#final').innerHTML = finalTranscript;
        document.querySelector('#interim').innerHTML = interim_transcript;
      };

      document.querySelector('#start').onclick = () => {
        if (speechRecognition) {
          console.log('starting');
          speechRecognition.start();
        }
      };
      document.querySelector('#stop').onclick = () => {
        if (speechRecognition) {
          console.log('stop');
          speechRecognition.stop();
        }
      };

      console.log(
        'window.webkitSpeechRecognition',
        window.webkitSpeechRecognition
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      {/* <div classNameName="mt-4" id="div_language">
        <h2 className="mb-3 text-light">Select Language</h2>
        <select
          className="form-select bg-secondary text-light"
          id="select_language"
          onchange="updateCountry()"
        ></select>
        <select
          className="form-select bg-secondary text-light mt-2"
          id="select_dialect"
        ></select>
      </div> */}
      <h2 className="mt-4 text-light">Transcript</h2>
      <div
        className="p-3"
        style={{
          border: '1px solid gray',
          height: '300px',
          borderRadius: '8px',
        }}
      >
        <span id="final" className="text-light"></span>
        <span id="interim" className="text-secondary"></span>
      </div>
      <div className="mt-4">
        <button className="btn btn-success m-4" id="start">
          Start
        </button>
        <button className="btn btn-danger m-4" id="stop">
          Stop
        </button>
        <p
          id="status"
          className="lead mt-3 text-light"
          style={{ display: 'none' }}
        >
          Listenting ...
        </p>
      </div>
    </React.Fragment>
  );
};

export default SpeechRecognition;
