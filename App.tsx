import { useState, useEffect } from 'react';
import { QUESTIONS } from './constants';
import { QuizState, Question } from './types';

// Utility for shuffling array (Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Time format utility
const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

function App() {
  const [gameState, setGameState] = useState<QuizState>(QuizState.START);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Timer state (10 minutes = 600 seconds)
  const [timeLeft, setTimeLeft] = useState(600);

  // State to hold the shuffled questions for the current session
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);

  const currentQuestion = activeQuestions[currentQuestionIndex];

  // Timer Effect
  useEffect(() => {
    let timer: number;
    if (gameState === QuizState.PLAYING && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setGameState(QuizState.FINISHED);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameState, timeLeft]);

  const handleStart = () => {
    // Select 20 random questions from the total pool
    const allShuffled = shuffleArray(QUESTIONS);
    const selectedQuestions = allShuffled.slice(0, 20).map((q) => ({
      ...q,
      // Shuffle options within each question
      options: shuffleArray(q.options),
    }));

    setActiveQuestions(selectedQuestions);
    setGameState(QuizState.PLAYING);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setTimeLeft(600); // Reset timer to 10 minutes
  };

  const handleOptionSelect = (optionId: string) => {
    if (showFeedback) return; // Prevent changing answer during feedback
    setSelectedOption(optionId);
  };

  const handleNext = () => {
    if (!selectedOption) return;

    const isCorrect = selectedOption === currentQuestion.correctOptionId;

    // Update score immediately if correct
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Show feedback before moving
    setShowFeedback(true);
  };

  const handleAdvanceQuestion = () => {
    setShowFeedback(false);
    setSelectedOption(null);

    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setGameState(QuizState.FINISHED);
    }
  };

  // Render Screens
  if (gameState === QuizState.START) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-indigo-600 p-8 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 mx-auto text-white mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h1 className="text-3xl font-bold text-white mb-2">ECDL Quiz</h1>
            <p className="text-indigo-100 font-medium">
              Utilizarea Computerului - Windows 11
            </p>
          </div>
          <div className="p-8">
            <div className="space-y-4 mb-8 text-slate-600">
              <p>
                Acest test conține <strong>20 de întrebări</strong> generate
                aleatoriu dintr-o bază de date extinsă ({QUESTIONS.length}+
                întrebări).
              </p>

              <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700 bg-slate-100 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Timp limită: 10 minute</span>
              </div>

              <div className="flex items-center space-x-2 text-sm font-semibold text-slate-700 bg-slate-100 p-3 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-emerald-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Punctaj de trecere: 80% (16/20)</span>
              </div>

              <p className="text-sm italic text-slate-500 pt-2">
                Subiecte: Hardware, Software, Windows 11, Word, Fișiere, Rețele,
                Securitate.
              </p>
            </div>
            <button
              onClick={handleStart}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-indigo-200"
            >
              Începe Testul
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (gameState === QuizState.FINISHED) {
    const totalQuestions =
      activeQuestions.length > 0 ? activeQuestions.length : 20;
    const percentage = Math.round((score / totalQuestions) * 100);
    const passed = percentage >= 80;
    const timeExpired = timeLeft === 0;

    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
          <div
            className={`${
              passed ? 'bg-emerald-500' : 'bg-rose-500'
            } p-8 text-center text-white transition-colors`}
          >
            <div className="mb-4 inline-flex items-center justify-center w-24 h-24 rounded-full bg-white bg-opacity-20 backdrop-blur-sm">
              <span className="text-4xl font-bold">{percentage}%</span>
            </div>
            <h2 className="text-3xl font-bold mb-1">
              {passed ? 'Felicitări!' : 'Mai încearcă!'}
            </h2>
            <p className="opacity-90 font-medium">
              {timeExpired
                ? 'Timpul a expirat!'
                : passed
                ? 'Ai trecut testul.'
                : 'Nu ai obținut punctajul de trecere (80%).'}
            </p>
          </div>

          <div className="p-8">
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-100">
              <div className="text-center w-1/2 border-r border-slate-100">
                <span className="block text-3xl font-bold text-slate-800">
                  {score}
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  Corecte
                </span>
              </div>
              <div className="text-center w-1/2">
                <span className="block text-3xl font-bold text-slate-800">
                  {totalQuestions - score}
                </span>
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  Greșite
                </span>
              </div>
            </div>

            <button
              onClick={handleStart}
              className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg"
            >
              Repetă Testul
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 flex flex-col items-center">
      {/* Header / Progress & Timer */}
      <div className="w-full max-w-2xl mb-6">
        <div className="flex justify-between items-center mb-4 bg-white p-3 rounded-lg shadow-sm border border-slate-100">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
              Întrebarea {currentQuestionIndex + 1} / {activeQuestions.length}
            </span>
          </div>

          <div
            className={`flex items-center space-x-2 font-mono font-bold text-lg px-3 py-1 rounded ${
              timeLeft < 60
                ? 'bg-rose-100 text-rose-600 animate-pulse'
                : 'bg-slate-100 text-slate-700'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>

        <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-indigo-600 h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${
                (currentQuestionIndex / activeQuestions.length) * 100
              }%`,
            }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col">
        <div className="p-6 md:p-10 border-b border-slate-100">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-tight">
            {currentQuestion.question}
          </h2>
        </div>

        <div className="p-6 md:p-10 space-y-3 bg-slate-50/50 flex-grow">
          {currentQuestion.options.map((option, index) => {
            let optionClass =
              'w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center group ';

            // Labels A, B, C, D based on current position index
            const label = String.fromCharCode(65 + index);

            if (showFeedback) {
              if (option.id === currentQuestion.correctOptionId) {
                optionClass +=
                  'border-emerald-500 bg-emerald-50 text-emerald-800'; // Correct answer shown always
              } else if (
                option.id === selectedOption &&
                selectedOption !== currentQuestion.correctOptionId
              ) {
                optionClass +=
                  'border-rose-500 bg-rose-50 text-rose-800 opacity-60'; // Wrong selection
              } else {
                optionClass +=
                  'border-slate-100 bg-white text-slate-400 opacity-50'; // Unselected distractions
              }
            } else {
              if (selectedOption === option.id) {
                optionClass +=
                  'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-sm';
              } else {
                optionClass +=
                  'border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-slate-50';
              }
            }

            return (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                disabled={showFeedback}
                className={optionClass}
              >
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 transition-colors
                  ${
                    showFeedback &&
                    option.id === currentQuestion.correctOptionId
                      ? 'bg-emerald-500 text-white'
                      : showFeedback && option.id === selectedOption
                      ? 'bg-rose-500 text-white'
                      : selectedOption === option.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                  }`}
                >
                  {label}
                </span>
                <span className="font-medium">{option.text}</span>

                {/* Icons for feedback */}
                {showFeedback &&
                  option.id === currentQuestion.correctOptionId && (
                    <svg
                      className="w-6 h-6 ml-auto text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                {showFeedback &&
                  option.id === selectedOption &&
                  option.id !== currentQuestion.correctOptionId && (
                    <svg
                      className="w-6 h-6 ml-auto text-rose-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
              </button>
            );
          })}
        </div>

        {/* Footer / Controls */}
        <div className="p-6 border-t border-slate-100 bg-white">
          {!showFeedback ? (
            <button
              onClick={handleNext}
              disabled={!selectedOption}
              className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all transform
                ${
                  selectedOption
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200 hover:-translate-y-0.5'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
            >
              Verifică Răspunsul
            </button>
          ) : (
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
                <p className="text-sm text-blue-900">
                  <span className="font-bold block mb-1">Explicație:</span>
                  {currentQuestion.explanation}
                </p>
              </div>
              <button
                onClick={handleAdvanceQuestion}
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:-translate-y-0.5"
              >
                {currentQuestionIndex === activeQuestions.length - 1
                  ? 'Vezi Rezultatele'
                  : 'Următoarea Întrebare'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
