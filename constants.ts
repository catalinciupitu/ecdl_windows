import { Question } from './types';

export const QUESTIONS: Question[] = [
  // --- HARDWARE & CONCEPTE DE BAZĂ ---
  {
    id: 1,
    question: 'Care dintre următoarele este o componentă Hardware?',
    options: [
      { id: 'a', text: 'Sistemul de operare Windows 11' },
      { id: 'b', text: 'Microsoft Word' },
      { id: 'c', text: 'Hard-diskul' },
      { id: 'd', text: 'Browserul Google Chrome' },
    ],
    correctOptionId: 'c',
    explanation:
      'Hardware-ul reprezintă echipamentele fizico-tehnice (ce pot fi atinse), cum ar fi hard-diskul, monitorul sau tastatura.',
  },
  {
    id: 2,
    question: 'Care este principala caracteristică a memoriei RAM?',
    options: [
      { id: 'a', text: 'Stochează datele permanent' },
      {
        id: 'b',
        text: 'Este o memorie volatilă (pierde datele la oprirea calculatorului)',
      },
      { id: 'c', text: 'Este folosită doar pentru pornirea calculatorului' },
      { id: 'd', text: 'Nu poate fi scrisă, ci doar citită' },
    ],
    correctOptionId: 'b',
    explanation:
      'Memoria RAM este volatilă; datele stocate în ea se pierd atunci când calculatorul nu mai este alimentat cu energie electrică.',
  },
  {
    id: 3,
    question: 'Câți Gigabytes (GB) are un Terabyte (TB)?',
    options: [
      { id: 'a', text: '100 GB' },
      { id: 'b', text: '1000 GB' },
      { id: 'c', text: '1024 GB' },
      { id: 'd', text: '512 GB' },
    ],
    correctOptionId: 'c',
    explanation:
      '1 Terabyte (TB) este egal cu 1024 Gigabytes (GB) (2 la puterea 10).',
  },
  {
    id: 4,
    question:
      'Care dintre următoarele este un dispozitiv periferic de INTRARE?',
    options: [
      { id: 'a', text: 'Monitorul' },
      { id: 'b', text: 'Imprimanta' },
      { id: 'c', text: 'Boxele' },
      { id: 'd', text: 'Tastatura' },
    ],
    correctOptionId: 'd',
    explanation:
      'Tastatura permite introducerea datelor în calculator. Celelalte sunt dispozitive de ieșire.',
  },
  {
    id: 5,
    question: 'Ce unitate de măsură este folosită pentru viteza procesorului?',
    options: [
      { id: 'a', text: 'Gigahertz (GHz)' },
      { id: 'b', text: 'Gigabytes (GB)' },
      { id: 'c', text: 'Megabits per second (Mbps)' },
      { id: 'd', text: 'Pixels (px)' },
    ],
    correctOptionId: 'a',
    explanation:
      'Viteza procesorului se măsoară în Hz (Hertzi), uzual în Gigahertz (GHz), reprezentând numărul de cicluri pe secundă.',
  },
  {
    id: 6,
    question: 'Care este rolul memoriei ROM?',
    options: [
      { id: 'a', text: 'Stocarea temporară a fișierelor utilizatorului' },
      { id: 'b', text: 'Rularea jocurilor video' },
      {
        id: 'c',
        text: 'Stocarea instrucțiunilor de pornire (boot) ale calculatorului',
      },
      { id: 'd', text: 'Conectarea la internet' },
    ],
    correctOptionId: 'c',
    explanation:
      'Memoria ROM (Read Only Memory) este non-volatilă și conține instrucțiunile esențiale pentru pornirea calculatorului (BIOS/UEFI).',
  },
  {
    id: 7,
    question: 'Ce reprezintă portul HDMI?',
    options: [
      { id: 'a', text: 'O conexiune pentru internet de mare viteză' },
      {
        id: 'b',
        text: 'O interfață pentru transferul datelor audio-video digitale',
      },
      { id: 'c', text: 'Un port pentru imprimantele vechi' },
      { id: 'd', text: 'Un slot pentru memoria RAM' },
    ],
    correctOptionId: 'b',
    explanation:
      'HDMI (High-Definition Multimedia Interface) transferă semnal audio și video necomprimat către monitoare sau televizoare.',
  },
  {
    id: 8,
    question:
      'Care dispozitiv de stocare nu are componente în mișcare și este mai rezistent la șocuri?',
    options: [
      { id: 'a', text: 'Hard Disk Drive (HDD)' },
      { id: 'b', text: 'Solid State Drive (SSD)' },
      { id: 'c', text: 'CD-ROM' },
      { id: 'd', text: 'Floppy Disk' },
    ],
    correctOptionId: 'b',
    explanation:
      'SSD-urile și memoriile Flash nu au componente mecanice în mișcare, spre deosebire de HDD-uri care au platane.',
  },
  {
    id: 9,
    question: 'Ce tip de software este sistemul de operare Windows?',
    options: [
      { id: 'a', text: 'Software de aplicație' },
      { id: 'b', text: 'Software de sistem' },
      { id: 'c', text: 'Malware' },
      { id: 'd', text: 'Shareware' },
    ],
    correctOptionId: 'b',
    explanation:
      'Sistemul de operare este un software de sistem care gestionează resursele calculatorului și oferă o interfață pentru utilizator.',
  },
  {
    id: 10,
    question: 'Ce înseamnă EULA?',
    options: [
      { id: 'a', text: 'European Union Laptop Association' },
      { id: 'b', text: 'End-User License Agreement' },
      { id: 'c', text: 'Electronic User Login Authentication' },
      { id: 'd', text: 'Extended Universal Local Area' },
    ],
    correctOptionId: 'b',
    explanation:
      'EULA (Acordul de licență pentru utilizatorul final) este contractul legal dintre producătorul software-ului și utilizator.',
  },
  {
    id: 11,
    question:
      "Care dintre următoarele este un exemplu de software 'Open Source'?",
    options: [
      { id: 'a', text: 'Microsoft Windows' },
      { id: 'b', text: 'Adobe Photoshop' },
      { id: 'c', text: 'Linux' },
      { id: 'd', text: 'Microsoft Office' },
    ],
    correctOptionId: 'c',
    explanation:
      'Linux este un sistem de operare Open Source, al cărui cod sursă este disponibil gratuit pentru utilizare și modificare.',
  },
  {
    id: 12,
    question: "Ce este o licență 'Trial'?",
    options: [
      { id: 'a', text: 'Software gratuit pentru totdeauna' },
      {
        id: 'b',
        text: 'Software ce poate fi folosit gratuit o perioadă limitată de timp',
      },
      { id: 'c', text: 'Software piratat' },
      { id: 'd', text: 'Software pentru instituții de învățământ' },
    ],
    correctOptionId: 'b',
    explanation:
      'Versiunile Trial permit utilizarea gratuită pentru o perioadă limitată (ex: 30 de zile) înainte de a necesita cumpărarea.',
  },

  // --- DESKTOP, FERESTRE & SETĂRI ---
  {
    id: 13,
    question:
      'Ce combinație de taste se folosește pentru a bloca rapid calculatorul (Lock)?',
    options: [
      { id: 'a', text: 'Ctrl + L' },
      { id: 'b', text: 'Windows + L' },
      { id: 'c', text: 'Alt + L' },
      { id: 'd', text: 'Shift + L' },
    ],
    correctOptionId: 'b',
    explanation:
      'Tasta Windows + L blochează instantaneu ecranul calculatorului.',
  },
  {
    id: 14,
    question:
      'Unde puteți vedea o listă cu toate aplicațiile instalate în Windows 11?',
    options: [
      { id: 'a', text: 'Doar în Control Panel' },
      { id: 'b', text: 'În meniul Start -> All apps' },
      { id: 'c', text: 'În Recycle Bin' },
      { id: 'd', text: 'În Task Manager' },
    ],
    correctOptionId: 'b',
    explanation:
      "Meniul Start din Windows 11 are un buton 'All apps' (Toate aplicațiile) care afișează lista completă.",
  },
  {
    id: 15,
    question: "Care este rolul 'Taskbar-ului' (Bara de activități)?",
    options: [
      { id: 'a', text: 'Să răcească procesorul' },
      {
        id: 'b',
        text: 'Să afișeze și să permită comutarea între aplicațiile deschise',
      },
      { id: 'c', text: 'Să stocheze documentele șterse' },
      { id: 'd', text: 'Să protejeze ecranul' },
    ],
    correctOptionId: 'b',
    explanation:
      'Taskbar-ul afișează pictogramele programelor active și permite lansarea sau comutarea rapidă între ele.',
  },
  {
    id: 16,
    question:
      'Cum puteți închide o aplicație care nu mai răspunde (este blocată)?',
    options: [
      { id: 'a', text: 'Trăgând de fereastră cu mouse-ul' },
      { id: 'b', text: "Folosind Task Manager (Ctrl+Shift+Esc) și 'End Task'" },
      { id: 'c', text: 'Apăsând tasta Space' },
      { id: 'd', text: 'Deconectând monitorul' },
    ],
    correctOptionId: 'b',
    explanation:
      "Task Manager permite închiderea forțată a proceselor care nu răspund prin comanda 'End Task'.",
  },
  {
    id: 17,
    question: 'Ce efect are combinația de taste Alt + Tab?',
    options: [
      { id: 'a', text: 'Închide fereastra curentă' },
      { id: 'b', text: 'Deschide meniul Start' },
      { id: 'c', text: 'Permite comutarea între ferestrele deschise' },
      { id: 'd', text: 'Face o captură de ecran' },
    ],
    correctOptionId: 'c',
    explanation:
      'Alt + Tab afișează o previzualizare a ferestrelor deschise și permite selectarea altei aplicații active.',
  },
  {
    id: 18,
    question: "Ce face funcția 'Snapping' (Aliniere) în Windows 11?",
    options: [
      { id: 'a', text: 'Face o poză ecranului' },
      {
        id: 'b',
        text: 'Organizează automat ferestrele pe ecran (jumătate, sfert etc.)',
      },
      { id: 'c', text: 'Închide toate ferestrele' },
      { id: 'd', text: 'Șterge fișierele temporare' },
    ],
    correctOptionId: 'b',
    explanation:
      'Snapping permite aranjarea rapidă a ferestrelor în layout-uri predefinite (split screen, grid) trăgându-le de margini.',
  },
  {
    id: 19,
    question:
      'Cum capturați doar fereastra activă, nu tot ecranul, în Clipboard?',
    options: [
      { id: 'a', text: 'Print Screen' },
      { id: 'b', text: 'Alt + Print Screen' },
      { id: 'c', text: 'Ctrl + Print Screen' },
      { id: 'd', text: 'Shift + Print Screen' },
    ],
    correctOptionId: 'b',
    explanation:
      'Tasta Print Screen capturează tot ecranul, în timp ce Alt + Print Screen capturează doar fereastra activă selectată.',
  },
  {
    id: 20,
    question: 'Care este scurtătura pentru deschiderea File Explorer?',
    options: [
      { id: 'a', text: 'Windows + E' },
      { id: 'b', text: 'Windows + F' },
      { id: 'c', text: 'Ctrl + E' },
      { id: 'd', text: 'Alt + E' },
    ],
    correctOptionId: 'a',
    explanation:
      'Windows + E este combinația standard pentru a lansa rapid File Explorer.',
  },
  {
    id: 21,
    question: 'Ce setare trebuie modificată pentru a schimba limba tastaturii?',
    options: [
      { id: 'a', text: 'Display settings' },
      { id: 'b', text: 'Time & language -> Language & region' },
      { id: 'c', text: 'Personalization -> Themes' },
      { id: 'd', text: 'System -> Sound' },
    ],
    correctOptionId: 'b',
    explanation:
      "Limbile de intrare și formatul regional se configurează în secțiunea 'Time & language' din Setări.",
  },
  {
    id: 22,
    question: "Ce face opțiunea 'Sleep' din meniul de alimentare?",
    options: [
      { id: 'a', text: 'Oprește complet calculatorul' },
      {
        id: 'b',
        text: 'Pune calculatorul într-o stare de consum redus, păstrând sesiunea activă în RAM',
      },
      { id: 'c', text: 'Repornește calculatorul' },
      { id: 'd', text: 'Deconectează utilizatorul curent' },
    ],
    correctOptionId: 'b',
    explanation:
      'Sleep salvează sesiunea în memoria RAM și reduce consumul de energie, permițând o revenire rapidă.',
  },

  // --- MICROSOFT WORD & LUCRUL CU TEXTUL ---
  {
    id: 23,
    question: 'Care este extensia implicită pentru fișierele Word moderne?',
    options: [
      { id: 'a', text: '.doc' },
      { id: 'b', text: '.txt' },
      { id: 'c', text: '.docx' },
      { id: 'd', text: '.pdf' },
    ],
    correctOptionId: 'c',
    explanation:
      'Începând cu Office 2007, extensia implicită este .docx (format bazat pe XML).',
  },
  {
    id: 24,
    question:
      'Ce combinație de taste selectează întregul text dintr-un document?',
    options: [
      { id: 'a', text: 'Ctrl + A' },
      { id: 'b', text: 'Ctrl + S' },
      { id: 'c', text: 'Shift + A' },
      { id: 'd', text: 'Alt + A' },
    ],
    correctOptionId: 'a',
    explanation:
      'Ctrl + A (All) selectează tot conținutul din documentul sau folderul activ.',
  },
  {
    id: 25,
    question: 'Cum puteți salva un document existent cu un nume nou?',
    options: [
      { id: 'a', text: 'File -> Save' },
      { id: 'b', text: 'File -> Save As' },
      { id: 'c', text: 'File -> Print' },
      { id: 'd', text: 'File -> Share' },
    ],
    correctOptionId: 'b',
    explanation:
      "Comanda 'Save As' (Salvare ca) permite salvarea unei copii a documentului cu un nume diferit sau în altă locație.",
  },
  {
    id: 26,
    question: 'Ce tastă șterge caracterul din STÂNGA cursorului?',
    options: [
      { id: 'a', text: 'Delete' },
      { id: 'b', text: 'Backspace' },
      { id: 'c', text: 'Insert' },
      { id: 'd', text: 'Space' },
    ],
    correctOptionId: 'b',
    explanation:
      'Backspace șterge caracterul din stânga, în timp ce Delete șterge caracterul din dreapta cursorului.',
  },
  {
    id: 27,
    question: "Ce face comanda 'Undo' (Ctrl + Z)?",
    options: [
      { id: 'a', text: 'Repetă ultima acțiune' },
      { id: 'b', text: 'Anulează ultima acțiune efectuată' },
      { id: 'c', text: 'Șterge tot textul' },
      { id: 'd', text: 'Salvează documentul' },
    ],
    correctOptionId: 'b',
    explanation:
      'Undo (Anulare) revine la starea anterioară ultimei acțiuni efectuate.',
  },
  {
    id: 28,
    question: 'Ce indică o linie roșie ondulată sub un cuvânt în Word?',
    options: [
      { id: 'a', text: 'O posibilă eroare gramaticală' },
      { id: 'b', text: 'O posibilă eroare de scriere (ortografie)' },
      { id: 'c', text: 'Textul este foarte important' },
      { id: 'd', text: 'Cuvântul este scris cu majuscule' },
    ],
    correctOptionId: 'b',
    explanation:
      'Linia roșie indică o greșeală de ortografie (cuvântul nu este în dicționar), iar cea albastră o greșeală gramaticală.',
  },
  {
    id: 29,
    question:
      'Cum se numește vizualizarea care arată cum va arăta documentul pe hârtie?',
    options: [
      { id: 'a', text: 'Web Layout' },
      { id: 'b', text: 'Print Layout' },
      { id: 'c', text: 'Draft' },
      { id: 'd', text: 'Outline' },
    ],
    correctOptionId: 'b',
    explanation:
      'Print Layout este modul standard de vizualizare în Word, simulând pagina tipărită.',
  },
  {
    id: 30,
    question:
      'Pentru a scrie un text cu litere mari (majuscule) permanent, se activează tasta:',
    options: [
      { id: 'a', text: 'Shift' },
      { id: 'b', text: 'Caps Lock' },
      { id: 'c', text: 'Ctrl' },
      { id: 'd', text: 'Alt Gr' },
    ],
    correctOptionId: 'b',
    explanation:
      'Caps Lock blochează tastatura în modul de scriere cu majuscule.',
  },

  // --- GESTIONAREA FIȘIERELOR ---
  {
    id: 31,
    question: "Ce este un 'Folder' (Director)?",
    options: [
      { id: 'a', text: 'Un fișier executabil' },
      {
        id: 'b',
        text: 'O structură logică pentru organizarea și gruparea fișierelor',
      },
      { id: 'c', text: 'Un dispozitiv fizic de stocare' },
      { id: 'd', text: 'Un tip de virus' },
    ],
    correctOptionId: 'b',
    explanation:
      'Folderele sunt containere virtuale folosite pentru a organiza fișierele și alte subfoldere într-o structură ierarhică.',
  },
  {
    id: 32,
    question:
      'Ce se întâmplă dacă redenumiți un fișier și îi ștergeți extensia (ex: .docx)?',
    options: [
      { id: 'a', text: 'Fișierul devine mai mic' },
      {
        id: 'b',
        text: 'Sistemul de operare nu va mai ști cu ce program să deschidă fișierul',
      },
      { id: 'c', text: 'Fișierul este șters automat' },
      { id: 'd', text: 'Nu se întâmplă nimic' },
    ],
    correctOptionId: 'b',
    explanation:
      'Extensia asociază fișierul cu un program. Fără ea, Windows nu știe cum să interpreteze conținutul.',
  },
  {
    id: 33,
    question:
      'Cum selectați mai multe fișiere care NU sunt adiacente (unul lângă altul)?',
    options: [
      { id: 'a', text: 'Țineți apăsată tasta Shift și dați click' },
      {
        id: 'b',
        text: 'Țineți apăsată tasta Ctrl și dați click pe fiecare fișier',
      },
      { id: 'c', text: 'Folosiți tasta Alt' },
      { id: 'd', text: 'Trageți cu mouse-ul peste ele' },
    ],
    correctOptionId: 'b',
    explanation:
      'Tasta Ctrl permite selecția multiplă a elementelor disparate. Shift este pentru selecție continuă (adiacentă).',
  },
  {
    id: 34,
    question:
      "Care este diferența dintre 'Cut' (Decupare) și 'Copy' (Copiere)?",
    options: [
      { id: 'a', text: 'Nu există nicio diferență' },
      { id: 'b', text: 'Cut mută elementul, Copy creează o duplicat' },
      { id: 'c', text: 'Copy șterge elementul original' },
      { id: 'd', text: 'Cut este doar pentru text, Copy pentru imagini' },
    ],
    correctOptionId: 'b',
    explanation:
      'Cut (Ctrl+X) elimină elementul din sursă pentru a-l muta, în timp ce Copy (Ctrl+C) păstrează originalul.',
  },
  {
    id: 35,
    question: 'Ce mărime are aproximativ 1 GB?',
    options: [
      { id: 'a', text: '1.000 KB' },
      { id: 'b', text: '1.000 MB' },
      { id: 'c', text: '1.000 Bytes' },
      { id: 'd', text: '100 MB' },
    ],
    correctOptionId: 'b',
    explanation:
      '1 Gigabyte (GB) este aproximativ egal cu 1.000 Megabytes (MB) (sau 1024 în sistem binar).',
  },
  {
    id: 36,
    question: 'Care este scopul arhivării (ex: .zip) fișierelor?',
    options: [
      { id: 'a', text: 'Să le facă mai colorate' },
      {
        id: 'b',
        text: 'Să reducă dimensiunea ocupată pe disc și să grupeze mai multe fișiere',
      },
      { id: 'c', text: 'Să le șteargă automat după o zi' },
      { id: 'd', text: 'Să le transforme în fișiere video' },
    ],
    correctOptionId: 'b',
    explanation:
      'Compresia reduce spațiul ocupat și facilitează transmiterea mai multor fișiere ca un singur pachet.',
  },
  {
    id: 37,
    question: 'Unde ajung fișierele șterse de pe un Stick USB?',
    options: [
      { id: 'a', text: 'În Recycle Bin' },
      { id: 'b', text: 'Sunt șterse definitiv imediat' },
      { id: 'c', text: "Într-un folder special numit 'Deleted'" },
      { id: 'd', text: 'Pe Desktop' },
    ],
    correctOptionId: 'b',
    explanation:
      'Fișierele șterse de pe unități externe (USB, Rețea) nu ajung în Recycle Bin, ci sunt șterse permanent.',
  },
  {
    id: 38,
    question: "Ce reprezintă o 'Scurtătură' (Shortcut)?",
    options: [
      { id: 'a', text: 'O copie a fișierului original' },
      {
        id: 'b',
        text: 'Un link/pointer către fișierul sau programul original',
      },
      { id: 'c', text: 'Un virus' },
      { id: 'd', text: 'Un dosar comprimat' },
    ],
    correctOptionId: 'b',
    explanation:
      'Scurtătura este un fișier mic care doar indică locul unde se află fișierul real. Ștergerea ei nu șterge originalul.',
  },
  {
    id: 39,
    question: 'Cum puteți recupera un fișier din Recycle Bin?',
    options: [
      { id: 'a', text: 'Nu se poate recupera' },
      { id: 'b', text: "Selectați fișierul și alegeți 'Restore' (Restaurare)" },
      { id: 'c', text: 'Faceți dublu click pe el' },
      { id: 'd', text: 'Folosiți comanda Cut' },
    ],
    correctOptionId: 'b',
    explanation:
      "Comanda 'Restore' mută fișierul înapoi în locația din care a fost șters.",
  },
  {
    id: 40,
    question: 'Ce tip de fișier are de obicei extensia .pdf?',
    options: [
      { id: 'a', text: 'Portable Document Format (document portabil)' },
      { id: 'b', text: 'Picture Digital File (imagine)' },
      { id: 'c', text: 'Program Data File (executabil)' },
      { id: 'd', text: 'Presentation Data File (prezentare)' },
    ],
    correctOptionId: 'a',
    explanation:
      'PDF (Portable Document Format) este un standard pentru documente care își păstrează formatarea pe orice dispozitiv.',
  },

  // --- REȚELE & INTERNET ---
  {
    id: 41,
    question: 'Ce înseamnă LAN?',
    options: [
      { id: 'a', text: 'Large Area Network' },
      { id: 'b', text: 'Local Area Network' },
      { id: 'c', text: 'Legal Area Network' },
      { id: 'd', text: 'Lost Area Network' },
    ],
    correctOptionId: 'b',
    explanation:
      'LAN (Local Area Network) este o rețea de calculatoare limitată la o zonă mică (casă, birou).',
  },
  {
    id: 42,
    question: 'Care este diferența dintre Internet și WWW?',
    options: [
      { id: 'a', text: 'Sunt identice' },
      {
        id: 'b',
        text: 'Internetul este infrastructura fizică, WWW este un serviciu de informații (pagini web) care rulează pe Internet',
      },
      { id: 'c', text: 'WWW este hardware, Internetul este software' },
      { id: 'd', text: 'Internetul este doar pentru email' },
    ],
    correctOptionId: 'b',
    explanation:
      'Internetul este rețeaua globală de rețele, iar World Wide Web (WWW) este colecția de documente interconectate accesibile prin Internet.',
  },
  {
    id: 43,
    question: 'Ce este un ISP?',
    options: [
      {
        id: 'a',
        text: 'Internet Service Provider (Furnizor de servicii internet)',
      },
      { id: 'b', text: 'Internal System Protocol' },
      { id: 'c', text: 'International Security Program' },
      { id: 'd', text: 'Intelligent Software Processor' },
    ],
    correctOptionId: 'a',
    explanation:
      'ISP-ul este compania care oferă acces la internet (ex: Digi, Orange, Vodafone).',
  },
  {
    id: 44,
    question: "Ce înseamnă 'Download'?",
    options: [
      { id: 'a', text: 'Trimiterea de fișiere către un server' },
      {
        id: 'b',
        text: 'Transferul datelor de pe un server (internet) pe calculatorul local',
      },
      { id: 'c', text: 'Ștergerea datelor' },
      { id: 'd', text: 'Repornirea routerului' },
    ],
    correctOptionId: 'b',
    explanation:
      'Download (Descărcare) este procesul de a primi date de la distanță pe dispozitivul local.',
  },
  {
    id: 45,
    question: 'Ce unitate măsoară viteza de transfer a datelor pe internet?',
    options: [
      { id: 'a', text: 'Hertzi (Hz)' },
      { id: 'b', text: 'Megabits pe secundă (Mbps)' },
      { id: 'c', text: 'Volți (V)' },
      { id: 'd', text: 'Turații pe minut (RPM)' },
    ],
    correctOptionId: 'b',
    explanation:
      'Lățimea de bandă se măsoară în biți pe secundă (bps, Kbps, Mbps, Gbps).',
  },
  {
    id: 46,
    question: "Ce este o rețea Wi-Fi 'Open' (Deschisă)?",
    options: [
      { id: 'a', text: 'O rețea foarte rapidă' },
      {
        id: 'b',
        text: 'O rețea necriptată, care nu necesită parolă și nu este sigură',
      },
      { id: 'c', text: 'O rețea care funcționează doar afară' },
      { id: 'd', text: 'O rețea plătită' },
    ],
    correctOptionId: 'b',
    explanation:
      'Rețelele deschise nu cer parolă, dar traficul de date poate fi interceptat ușor de alții, fiind nesigure.',
  },
  {
    id: 47,
    question: 'Ce este VoIP?',
    options: [
      { id: 'a', text: 'Voice Over Internet Protocol' },
      { id: 'b', text: 'Video on Internet Page' },
      { id: 'c', text: 'Virus on Internet Protocol' },
      { id: 'd', text: 'Virtual Office IP' },
    ],
    correctOptionId: 'a',
    explanation:
      'VoIP permite efectuarea apelurilor vocale folosind conexiunea la internet (ex: Skype, WhatsApp Call).',
  },
  {
    id: 48,
    question: 'Ce este un Intranet?',
    options: [
      { id: 'a', text: 'O rețea publică globală' },
      {
        id: 'b',
        text: 'O rețea privată a unei organizații, accesibilă doar membrilor acesteia',
      },
      { id: 'c', text: 'Un tip de cablu' },
      { id: 'd', text: 'Un antivirus' },
    ],
    correctOptionId: 'b',
    explanation:
      'Intranetul folosește tehnologii web dar este izolat de internetul public, fiind dedicat uzului intern al unei companii.',
  },
  {
    id: 49,
    question: 'Care este simbolul standard pentru o rețea wireless securizată?',
    options: [
      { id: 'a', text: 'Un lacăt lângă iconița de semnal' },
      { id: 'b', text: 'Un semn de exclamare' },
      { id: 'c', text: 'Un cerc roșu' },
      { id: 'd', text: 'O cheie franceză' },
    ],
    correctOptionId: 'a',
    explanation:
      'În lista de rețele, un lacăt indică faptul că rețeaua este protejată cu parolă (criptată).',
  },
  {
    id: 50,
    question: 'Ce este un VPN?',
    options: [
      { id: 'a', text: 'Virtual Private Network' },
      { id: 'b', text: 'Virus Protection Name' },
      { id: 'c', text: 'Visual Power Note' },
      { id: 'd', text: 'Very Public Network' },
    ],
    correctOptionId: 'a',
    explanation:
      'VPN-ul creează un tunel securizat și criptat peste o rețea publică, protejând confidențialitatea datelor.',
  },

  // --- SECURITATE IT ---
  {
    id: 51,
    question: 'Ce este o parolă puternică?',
    options: [
      { id: 'a', text: 'Numele tău' },
      { id: 'b', text: 'Data nașterii' },
      { id: 'c', text: '123456' },
      {
        id: 'd',
        text: 'O combinație lungă de litere mari, mici, cifre și simboluri',
      },
    ],
    correctOptionId: 'd',
    explanation:
      'Complexitatea și lungimea parolei o fac greu de ghicit sau spart prin metode brute-force.',
  },
  {
    id: 52,
    question: 'Ce este un Firewall?',
    options: [
      { id: 'a', text: 'Un perete fizic ignifug' },
      {
        id: 'b',
        text: 'Un software/hardware care monitorizează și controlează traficul de rețea',
      },
      { id: 'c', text: 'Un program de editare text' },
      { id: 'd', text: 'Un dispozitiv de stocare' },
    ],
    correctOptionId: 'b',
    explanation:
      'Firewall-ul acționează ca o barieră între o rețea sigură și una nesigură (internet), blocând accesul neautorizat.',
  },
  {
    id: 53,
    question: 'Ce înseamnă Backup?',
    options: [
      { id: 'a', text: 'Revenirea la setările din fabrică' },
      {
        id: 'b',
        text: 'Copierea datelor într-o locație secundară pentru siguranță',
      },
      { id: 'c', text: 'Ștergerea datelor vechi' },
      { id: 'd', text: 'Navigarea înapoi pe o pagină web' },
    ],
    correctOptionId: 'b',
    explanation:
      'Backup-ul este esențial pentru recuperarea datelor în cazul defecțiunilor hardware, ștergerii accidentale sau atacurilor cibernetice.',
  },
  {
    id: 54,
    question: 'Care este scopul actualizărilor (Updates) de sistem?',
    options: [
      { id: 'a', text: 'Doar să schimbe aspectul interfeței' },
      { id: 'b', text: 'Să ocupe spațiu inutil' },
      { id: 'c', text: 'Să repare vulnerabilități de securitate și bug-uri' },
      { id: 'd', text: 'Să șteargă fișierele utilizatorului' },
    ],
    correctOptionId: 'c',
    explanation:
      'Actualizările corectează breșe de securitate pe care hackerii le-ar putea exploata.',
  },
  {
    id: 55,
    question: 'Ce este Malware-ul?',
    options: [
      { id: 'a', text: 'Hardware stricat' },
      { id: 'b', text: 'Software rău intenționat (viruși, troieni, viermi)' },
      { id: 'c', text: 'Un program de desenat' },
      { id: 'd', text: 'O marcă de calculatoare' },
    ],
    correctOptionId: 'b',
    explanation:
      'Malware (Malicious Software) este termenul generic pentru orice program creat să dăuneze unui sistem.',
  },
  {
    id: 56,
    question: "Cum se răspândește de obicei un 'Vierme' (Worm) informatic?",
    options: [
      { id: 'a', text: 'Prin rețea, fără intervenția utilizatorului' },
      { id: 'b', text: 'Doar dacă deschizi un fișier Word' },
      { id: 'c', text: 'Dacă nu ștergi praful de pe calculator' },
      { id: 'd', text: 'Doar prin CD-uri' },
    ],
    correctOptionId: 'a',
    explanation:
      'Viermii se auto-replică și se răspândesc prin rețelele de calculatoare, exploatând vulnerabilități.',
  },
  {
    id: 57,
    question: "Ce este 'Phishing-ul'?",
    options: [
      { id: 'a', text: 'Un joc de pescuit' },
      {
        id: 'b',
        text: 'O încercare frauduloasă de a obține date confidențiale (parole, carduri) pretinzând a fi o entitate de încredere',
      },
      { id: 'c', text: 'O metodă de optimizare a calculatorului' },
      { id: 'd', text: 'Un tip de imprimantă' },
    ],
    correctOptionId: 'b',
    explanation:
      'Phishing-ul se face de obicei prin email-uri sau site-uri false care imită bănci sau servicii cunoscute.',
  },
  {
    id: 58,
    question: "Ce este un 'Troian' (Cal Troian)?",
    options: [
      { id: 'a', text: 'Un antivirus puternic' },
      {
        id: 'b',
        text: 'Un program malware care pare legitim dar ascunde funcții dăunătoare',
      },
      { id: 'c', text: 'Un fișier text' },
      { id: 'd', text: 'Un browser web' },
    ],
    correctOptionId: 'b',
    explanation:
      'Troienii păcălesc utilizatorul să-i instaleze, oferind apoi atacatorilor acces la sistem.',
  },
  {
    id: 59,
    question:
      'Ce măsuri trebuie luate când plecați de la calculator pentru scurt timp?',
    options: [
      { id: 'a', text: 'Să opriți monitorul' },
      { id: 'b', text: 'Să blocați ecranul (Lock)' },
      { id: 'c', text: 'Să lăsați documentele deschise' },
      { id: 'd', text: 'Să scoateți cablul de internet' },
    ],
    correctOptionId: 'b',
    explanation:
      'Blocarea ecranului previne accesul fizic neautorizat la datele dvs. cât timp sunteți plecat.',
  },
  {
    id: 60,
    question:
      'De ce nu este bine să refolosiți aceeași parolă la toate conturile?',
    options: [
      { id: 'a', text: 'Este greu de ținut minte' },
      {
        id: 'b',
        text: 'Dacă un cont este compromis, toate conturile devin vulnerabile',
      },
      { id: 'c', text: 'Calculatorul va funcționa mai lent' },
      { id: 'd', text: 'Nu este permis de Windows' },
    ],
    correctOptionId: 'b',
    explanation:
      'Dacă un hacker află parola de la un serviciu slab securizat, o va încerca și pe email, bancă, etc.',
  },

  // --- SĂNĂTATE ȘI ECOLOGIE (GREEN IT) ---
  {
    id: 61,
    question: 'Ce înseamnă ergonomia postului de lucru?',
    options: [
      { id: 'a', text: 'Cumpărarea celui mai scump echipament' },
      {
        id: 'b',
        text: 'Adaptarea locului de muncă la om pentru confort și eficiență',
      },
      { id: 'c', text: 'Viteza de tastare' },
      { id: 'd', text: 'Economisirea curentului' },
    ],
    correctOptionId: 'b',
    explanation:
      'Ergonomia corectă previne afecțiunile musculo-scheletice și oboseala ochilor.',
  },
  {
    id: 62,
    question: 'La ce distanță ar trebui să fie monitorul față de ochi?',
    options: [
      { id: 'a', text: 'Foarte aproape (20 cm)' },
      { id: 'b', text: 'La o lungime de braț (40-75 cm)' },
      { id: 'c', text: 'La 2 metri' },
      { id: 'd', text: 'Nu contează' },
    ],
    correctOptionId: 'b',
    explanation: 'Această distanță reduce efortul vizual.',
  },
  {
    id: 63,
    question: 'Ce este RSI?',
    options: [
      { id: 'a', text: 'Remote System Install' },
      {
        id: 'b',
        text: 'Repetitive Strain Injury (Vătămare prin solicitare repetitivă)',
      },
      { id: 'c', text: 'Really Strong Internet' },
      { id: 'd', text: 'Recycle System Info' },
    ],
    correctOptionId: 'b',
    explanation:
      'RSI apare din cauza mișcărilor repetitive (tastare, click) și a posturii incorecte pe termen lung.',
  },
  {
    id: 64,
    question: 'Cum trebuie poziționat monitorul pentru a evita reflexiile?',
    options: [
      { id: 'a', text: 'Cu fața spre fereastră' },
      { id: 'b', text: 'Cu spatele la fereastră' },
      { id: 'c', text: 'Perpendicular pe sursa de lumină (fereastră)' },
      { id: 'd', text: 'Pe podea' },
    ],
    correctOptionId: 'c',
    explanation:
      'Poziționarea perpendiculară evită atât reflexiile pe ecran, cât și lumina directă în ochii utilizatorului.',
  },
  {
    id: 65,
    question: 'Ce trebuie să faceți cu cartușele de imprimantă consumate?',
    options: [
      { id: 'a', text: 'Să le aruncați la gunoiul menajer' },
      { id: 'b', text: 'Să le reciclați la centre specializate' },
      { id: 'c', text: 'Să le ardeți' },
      { id: 'd', text: 'Să le îngropați' },
    ],
    correctOptionId: 'b',
    explanation:
      'Componentele electronice și cartușele conțin substanțe toxice și trebuie reciclate corespunzător (e-waste).',
  },
  {
    id: 66,
    question:
      'Care este un avantaj al lucrului cu documente electronice în loc de hârtie?',
    options: [
      { id: 'a', text: 'Consumă mai mult curent' },
      {
        id: 'b',
        text: 'Protejează mediul prin reducerea consumului de hârtie',
      },
      { id: 'c', text: 'Se pierd mai ușor' },
      { id: 'd', text: 'Sunt mai greu de trimis' },
    ],
    correctOptionId: 'b',
    explanation:
      'Digitalizarea reduce nevoia de defrișare și deșeurile de hârtie.',
  },
  {
    id: 67,
    question: 'Ce setare ajută la economisirea energiei laptopului?',
    options: [
      { id: 'a', text: 'Luminozitatea ecranului la maxim' },
      {
        id: 'b',
        text: 'Setarea timpului scurt pentru oprirea ecranului la inactivitate',
      },
      { id: 'c', text: 'Lăsarea Wi-Fi pornit când nu e nevoie' },
      { id: 'd', text: 'Rularea multor programe simultan' },
    ],
    correctOptionId: 'b',
    explanation:
      'Ecranul este un mare consumator de energie; oprirea lui rapidă la inactivitate economisește bateria.',
  },

  // --- ALTE ÎNTREBĂRI DIVERSE & SPECIFICE WINDOWS 11 ---
  {
    id: 68,
    question:
      "Unde găsiți setările pentru 'Dark Mode' (Mod întunecat) în Windows 11?",
    options: [
      { id: 'a', text: 'System -> Sound' },
      { id: 'b', text: 'Personalization -> Colors' },
      { id: 'c', text: 'Network & internet' },
      { id: 'd', text: 'Accounts' },
    ],
    correctOptionId: 'b',
    explanation:
      'Temele de culoare (Light/Dark) se configurează în Personalization.',
  },
  {
    id: 69,
    question: "Ce este 'Clipboard-ul'?",
    options: [
      {
        id: 'a',
        text: 'O zonă de memorie temporară pentru stocarea datelor copiate/decupate',
      },
      { id: 'b', text: 'Un folder pe desktop' },
      { id: 'c', text: 'Un program de desenat' },
      { id: 'd', text: 'O componentă hardware' },
    ],
    correctOptionId: 'a',
    explanation:
      'Clipboard-ul reține datele între momentul comenzii Copy/Cut și comanda Paste.',
  },
  {
    id: 70,
    question: 'Ce face combinația Ctrl + P?',
    options: [
      { id: 'a', text: 'Salvează documentul' },
      { id: 'b', text: 'Deschide fereastra de imprimare (Print)' },
      { id: 'c', text: 'Lipește textul (Paste)' },
      { id: 'd', text: 'Închide programul' },
    ],
    correctOptionId: 'b',
    explanation: 'Ctrl + P este scurtătura universală pentru Print.',
  },
  {
    id: 71,
    question: "Ce înseamnă 'Drag and Drop'?",
    options: [
      { id: 'a', text: 'Copiere și Lipire' },
      { id: 'b', text: 'Tragere și Eliberare (pentru a muta elemente)' },
      { id: 'c', text: 'Instalare și Dezinstalare' },
      { id: 'd', text: 'Pornire și Oprire' },
    ],
    correctOptionId: 'b',
    explanation:
      'Drag and Drop este acțiunea de a muta un obiect ținând click apăsat și eliberându-l în noua locație.',
  },
  {
    id: 72,
    question: 'Ce caracter NU poate fi folosit în numele unui fișier?',
    options: [
      { id: 'a', text: 'Spațiu' },
      { id: 'b', text: 'Linie ( - )' },
      { id: 'c', text: 'Asterisc ( * )' },
      { id: 'd', text: 'Underscore ( _ )' },
    ],
    correctOptionId: 'c',
    explanation:
      'Caracterele rezervate precum * ? / \\ : < > | nu sunt permise în numele de fișiere.',
  },
  {
    id: 73,
    question: 'Care este capacitatea standard a unui CD?',
    options: [
      { id: 'a', text: '4.7 GB' },
      { id: 'b', text: '700 MB' },
      { id: 'c', text: '1.44 MB' },
      { id: 'd', text: '25 GB' },
    ],
    correctOptionId: 'b',
    explanation:
      'CD-urile standard au 700 MB. DVD-urile au 4.7 GB, iar Blu-ray-urile 25 GB+.',
  },
  {
    id: 74,
    question: "Ce este un 'Driver'?",
    options: [
      { id: 'a', text: 'O persoană care conduce mașina' },
      {
        id: 'b',
        text: 'Un program care permite sistemului de operare să comunice cu o componentă hardware',
      },
      { id: 'c', text: 'Un șurub în unitatea centrală' },
      { id: 'd', text: 'Un folder special' },
    ],
    correctOptionId: 'b',
    explanation:
      'Fără driverul corect, Windows nu știe cum să folosească o placă video, o imprimantă etc.',
  },
  {
    id: 75,
    question:
      'Ce combinație de taste deschide meniul de căutare (Search) în Windows?',
    options: [
      { id: 'a', text: 'Windows + S' },
      { id: 'b', text: 'Windows + D' },
      { id: 'c', text: 'Windows + X' },
      { id: 'd', text: 'Ctrl + S' },
    ],
    correctOptionId: 'a',
    explanation: 'Windows + S (Search) deschide bara de căutare.',
  },
  {
    id: 76,
    question:
      'Care este numele asistentului de securitate integrat în Windows?',
    options: [
      { id: 'a', text: 'Norton' },
      { id: 'b', text: 'McAfee' },
      { id: 'c', text: 'Windows Defender (Security)' },
      { id: 'd', text: 'Kaspersky' },
    ],
    correctOptionId: 'c',
    explanation:
      'Windows Defender este soluția antivirus gratuită inclusă în sistemul de operare.',
  },
  {
    id: 77,
    question: "Ce înseamnă 'Reboot'?",
    options: [
      { id: 'a', text: 'Ștergerea sistemului' },
      { id: 'b', text: 'Repornirea calculatorului' },
      { id: 'c', text: 'Instalarea unui joc' },
      { id: 'd', text: 'Cumpărarea unui calculator nou' },
    ],
    correctOptionId: 'b',
    explanation:
      'Reboot sau Restart înseamnă oprirea și pornirea imediată a sistemului pentru reinițializare.',
  },
  {
    id: 78,
    question: "Ce face comanda 'Paste Shortcut'?",
    options: [
      { id: 'a', text: 'Copiază fișierul original' },
      {
        id: 'b',
        text: 'Creează o scurtătură către fișierul original în locația curentă',
      },
      { id: 'c', text: 'Mută fișierul' },
      { id: 'd', text: 'Deschide fișierul' },
    ],
    correctOptionId: 'b',
    explanation:
      'Această comandă nu multiplică fișierul, ci creează doar un link rapid către el.',
  },
  {
    id: 79,
    question: "Unde se află butonul 'Start' în Windows 11 (implicit)?",
    options: [
      { id: 'a', text: 'În colțul stânga-sus' },
      { id: 'b', text: 'Centrat pe bara de activități (Taskbar)' },
      { id: 'c', text: 'În colțul dreapta-jos' },
      { id: 'd', text: 'Nu există buton Start' },
    ],
    correctOptionId: 'b',
    explanation:
      'Windows 11 a mutat implicit meniul Start și pictogramele pe centrul taskbar-ului (deși se poate muta la stânga).',
  },
  {
    id: 80,
    question: "Ce este 'Cloud Storage' (Stocare în cloud)?",
    options: [
      { id: 'a', text: 'Stocarea datelor pe un stick USB alb' },
      {
        id: 'b',
        text: 'Stocarea datelor pe servere accesibile prin internet (ex: OneDrive, Google Drive)',
      },
      { id: 'c', text: 'Stocarea datelor doar când plouă' },
      { id: 'd', text: 'O tehnologie wireless' },
    ],
    correctOptionId: 'b',
    explanation:
      'Cloud storage permite accesarea fișierelor de pe orice dispozitiv conectat la internet.',
  },
  {
    id: 81,
    question: 'Cum puteți vedea extensiile fișierelor în File Explorer?',
    options: [
      { id: 'a', text: 'Nu se poate' },
      { id: 'b', text: 'View -> Show -> File name extensions' },
      { id: 'c', text: 'Click dreapta -> Show extensions' },
      { id: 'd', text: 'Apăsând tasta E' },
    ],
    correctOptionId: 'b',
    explanation:
      'În Windows 11, această opțiune se găsește în meniul View, submeniul Show.',
  },
  {
    id: 82,
    question: "Ce este un 'Touchpad'?",
    options: [
      { id: 'a', text: 'Un ecran tactil' },
      {
        id: 'b',
        text: 'Dispozitivul de punctare integrat în laptopuri (înlocuitor de mouse)',
      },
      { id: 'c', text: 'O tabletă' },
      { id: 'd', text: 'Un buton de pornire' },
    ],
    correctOptionId: 'b',
    explanation:
      'Touchpad-ul este suprafața sensibilă la atingere de pe laptopuri folosită pentru a controla cursorul.',
  },
  {
    id: 83,
    question:
      'Care dintre următoarele este un software de compresie (arhivare)?',
    options: [
      { id: 'a', text: 'Adobe Reader' },
      { id: 'b', text: 'WinRAR / 7-Zip' },
      { id: 'c', text: 'VLC Media Player' },
      { id: 'd', text: 'Microsoft Edge' },
    ],
    correctOptionId: 'b',
    explanation:
      'WinRAR, WinZip și 7-Zip sunt aplicații populare pentru gestionarea arhivelor.',
  },
  {
    id: 84,
    question: "Ce înseamnă 'Refresh' (F5) într-un browser web?",
    options: [
      { id: 'a', text: 'Închide pagina' },
      {
        id: 'b',
        text: 'Reîncarcă pagina curentă pentru a actualiza conținutul',
      },
      { id: 'c', text: 'Deschide o pagină nouă' },
      { id: 'd', text: 'Șterge istoricul' },
    ],
    correctOptionId: 'b',
    explanation:
      'Refresh re-descarcă pagina de la server pentru a afișa cele mai recente informații.',
  },
  {
    id: 85,
    question: "Ce este 'HTTPS'?",
    options: [
      { id: 'a', text: 'O versiune nesecurizată a HTTP' },
      {
        id: 'b',
        text: 'HyperText Transfer Protocol Secure (conexiune criptată/sigură)',
      },
      { id: 'c', text: 'Un limbaj de programare' },
      { id: 'd', text: 'Un model de monitor' },
    ],
    correctOptionId: 'b',
    explanation:
      'HTTPS indică o conexiune sigură între browser și site-ul web, esențială pentru tranzacții online.',
  },
];
