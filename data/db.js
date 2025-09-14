const academicDb = {
  subjects: {
    s1: {
      common: [
        { code: "MAT 101", name: "Linear Algebra and Calculus", credits: 4 },
        { code: "CYT 100", name: "Engineering Chemistry", credits: 4 },
        { code: "EST 100", name: "Engineering Mechanics", credits: 4 },
        { code: "EST 130", name: "Basics of Electrical and Electronics Engineering", credits: 4 },
        { code: "HUN 101", name: "Life Skills", credits: 2 }
      ],
      cse: [], ece: [], me: [], ce: [], eee: [], it: []
    },
    s2: {
      common: [
        { code: "MAT 102", name: "Vector Calculus and Differential Equations", credits: 4 },
        { code: "PHT 100", name: "Engineering Physics A", credits: 4 },
        { code: "EST 110", name: "Engineering Graphics", credits: 3 },
        { code: "EST 120", name: "Basics of Civil and Mechanical Engineering", credits: 4 },
        { code: "HUN 102", name: "Professional Communication", credits: 2 }
      ],
      cse: [], ece: [], me: [], ce: [], eee: [], it: []
    },
    s3: {
      cse: [
        { code: "MAT 203", name: "Discrete Mathematical Structures", credits: 4 },
        { code: "CST 201", name: "Data Structures", credits: 4 },
        { code: "CST 203", name: "Logic System Design", credits: 4 },
        { code: "CST 205", name: "Object Oriented Programming using Java", credits: 4 },
        { code: "MCN 201", name: "Sustainable Engineering", credits: 2 }
      ],
      ece: [
        { code: "MAT 201", name: "Partial Differential Equations and Complex Analysis", credits: 4 },
        { code: "ECT 201", name: "Solid State Devices", credits: 4 },
        { code: "ECT 203", name: "Logic Circuit Design", credits: 4 },
        { code: "ECT 205", name: "Network Theory", credits: 4 }
      ],
      me: [
        { code: "MAT 201", name: "Partial Differential Equations and Complex Analysis", credits: 4 },
        { code: "MET 201", name: "Mechanics of Solids", credits: 4 },
        { code: "MET 203", name: "Mechanics of Fluids", credits: 4 },
        { code: "MET 205", name: "Metallurgy and Material Science", credits: 4 }
      ],
      ce: [
        { code: "MAT 201", name: "Partial Differential Equations and Complex Analysis", credits: 4 },
        { code: "CET 201", name: "Mechanics of Solids", credits: 4 },
        { code: "CET 203", name: "Fluid Mechanics and Hydraulics", credits: 4 },
        { code: "CET 205", name: "Surveying and Geomatics", credits: 4 }
      ]
    },
    s4: {
      cse: [
        { code: "MAT 206", name: "Graph Theory", credits: 4 },
        { code: "CST 202", name: "Computer Organization and Architecture", credits: 4 },
        { code: "CST 204", name: "Database Management Systems", credits: 4 },
        { code: "CST 206", name: "Operating Systems", credits: 4 },
        { code: "MCN 202", name: "Constitution of India", credits: 2 }
      ],
      ece: [
        { code: "MAT 204", name: "Probability Random Processes and Numerical Methods", credits: 4 },
        { code: "ECT 202", name: "Analog Circuits", credits: 4 },
        { code: "ECT 204", name: "Signals and Systems", credits: 4 },
        { code: "ECT 206", name: "Computer Architecture and Microcontrollers", credits: 4 }
      ]
    },
    s5: {
      cse: [
        { code: "CST 301", name: "Formal Languages and Automata Theory", credits: 4 },
        { code: "CST 303", name: "Computer Networks", credits: 4 },
        { code: "CST 305", name: "System Software", credits: 4 },
        { code: "CST 307", name: "Microprocessors and Microcontrollers", credits: 4 },
        { code: "CST 309", name: "Management of Software Systems", credits: 3 }
      ]
    },
    s6: {
      cse: [
        { code: "CST 302", name: "Compiler Design", credits: 4 },
        { code: "CST 304", name: "Computer Graphics and Image Processing", credits: 4 },
        { code: "CST 306", name: "Algorithm Analysis and Design", credits: 4 },
        { code: "HUT 300", name: "Industrial Economics and Foreign Trade", credits: 3 }
      ]
    },
    s7: {
      cse: [
        { code: "CST 401", name: "Artificial Intelligence", credits: 4 },
        { code: "CST 403", name: "Computer Systems Security", credits: 4 },
        { code: "CSD 415", name: "Machine Learning", credits: 3 }
      ]
    },
    s8: {
      cse: [
        { code: "CST 402", name: "Distributed Computing", credits: 4 },
        { code: "CST 404", name: "Comprehensive Course Viva", credits: 1 },
        { code: "CSD 482", name: "Cloud Computing", credits: 3 }
      ]
    }
  },

  materials: {
    "MAT 101": {
      syllabus: `
        <h4>Module 1: Single Variable Calculus</h4>
        <p>Limits and continuity, derivatives, Rolles theorem, Mean value theorem, LHospitals rule, Taylors and Maclaurins series.</p>
        <h4>Module 2: Multivariable Calculus</h4>
        <p>Functions of several variables, partial derivatives, chain rule, total derivative, Jacobians, maxima and minima of functions of two variables.</p>
        <h4>Module 3: Double and Triple Integrals</h4>
        <p>Evaluation of double integrals, change of order of integration, double integrals in polar coordinates, area as double integral, volume as triple integral.</p>
        <h4>Module 4: Sequences and Series</h4>
        <p>Convergence of sequences and series, tests for convergence (Comparison, Ratio, Root, Integral, Alternating series tests), power series, radius of convergence.</p>
        <h4>Module 5: Fourier Series</h4>
        <p>Periodic functions, Dirichlets conditions, Fourier series of periodic functions, Eulers formulae, half range sine and cosine series.</p>
      `,
      notes: [
        { title: "Module 1 - Single Variable Calculus Notes", author: "Dr. Deepa K.", file: "MAT101_Mod1_Calculus.pdf" },
        { title: "Module 2 - Multivariable Calculus Handouts", author: "Prof. Sunny Math", file: "MAT101_Mod2_MultiVar.pdf" },
        { title: "Module 3 and 4 - Double Integrals and Series", author: "Royce Study Hub", file: "MAT101_Mod3_4_Series.pdf" },
        { title: "Module 5 - Fourier Series Solved Problems", author: "Vivek Dominic", file: "MAT101_Mod5_Fourier.pdf" }
      ],
      models: [
        { title: "S1 Calculus Model Paper 2024 (Scheme 2024)", year: 2024, file: "MAT101_Model_2024.pdf" },
        { title: "Calculus Official KTU Model Exam", year: 2023, file: "MAT101_Official_Model.pdf" }
      ],
      pyqs: [
        { title: "S1 Regular Exam - March 2024", year: 2024, file: "MAT101_QP_March2024.pdf" },
        { title: "S1 Supplementary Exam - Sept 2023", year: 2023, file: "MAT101_QP_Sept2023.pdf" },
        { title: "S1 Regular Exam - Dec 2022", year: 2022, file: "MAT101_QP_Dec2022.pdf" }
      ]
    },
    "CST 201": {
      syllabus: `
        <h4>Module 1: Basic concepts of Data Structures</h4>
        <p>Complexity analysis, Arrays, representation of sparse matrices, Polynomial representation and addition.</p>
        <h4>Module 2: Stacks and Queues</h4>
        <p>Stack ADT, applications (infix to postfix conversion, evaluation of postfix), Queue ADT, circular queue, double ended queue.</p>
        <h4>Module 3: Linked Lists</h4>
        <p>Singly linked list, Doubly linked list, Circular linked list, Polynomial addition using linked lists, Linked Stacks and Queues.</p>
        <h4>Module 4: Trees</h4>
        <p>Binary Trees, representations, traversals (Inorder, Preorder, Postorder), Binary Search Trees (creation, insertion, deletion), Threaded Binary Trees.</p>
        <h4>Module 5: Graphs, Sorting and Searching</h4>
        <p>Graph representations, BFS and DFS, Sorting (Bubble, Selection, Insertion, Merge, Quick, Heap), Hashing.</p>
      `,
      notes: [
        { title: "Complete Lecture Notes - CST 201 DS", author: "Gerald Cherian", file: "CST201_FullNotes_Gerald.pdf" },
        { title: "CST 201 Module 1 and 2 Short Notes", author: "Royce PS", file: "CST201_Mod1_2_Short.pdf" },
        { title: "Data Structures Code Repository Guide", author: "Peer Contributor", file: "CST201_CodeRepo.pdf" }
      ],
      models: [
        { title: "CST 201 Model Question Paper (Scheme 2019)", year: 2019, file: "CST201_Model_2019.pdf" }
      ],
      pyqs: [
        { title: "CST 201 Regular Exam - July 2023", year: 2023, file: "CST201_QP_July2023.pdf" },
        { title: "CST 201 Regular Exam - Jan 2023", year: 2023, file: "CST201_QP_Jan2023.pdf" }
      ]
    }
  }
};

['s1', 's2'].forEach(sem => {
  ['cse', 'ece', 'me', 'ce', 'eee', 'it'].forEach(branch => {
    academicDb.subjects[sem][branch] = [...academicDb.subjects[sem].common];
  });
});

export function getSubjectMaterials(code, name) {
  if (academicDb.materials[code]) {
    return academicDb.materials[code];
  }
  return {
    syllabus: `
      <h4>Module 1: Fundamentals of ${name}</h4>
      <p>Introduction, historical perspective, core concepts and basic components of ${name} (${code}).</p>
      <h4>Module 2: Theoretical Models</h4>
      <p>Mathematical formulations, models, algorithms, and design paradigms governing the subject area.</p>
      <h4>Module 3: Core Implementation</h4>
      <p>Step by step practical applications, circuits, coding principles, or physical methodologies.</p>
      <h4>Module 4: Advanced Systems</h4>
      <p>Integration of elements, troubleshooting, analysis parameters, and case studies.</p>
      <h4>Module 5: Modern Trends and Research</h4>
      <p>Industry 4.0 integrations, recent publications, exam oriented special topics and review questions.</p>
    `,
    notes: [
      { title: `Module 1 and 2 Study Notes - ${code}`, author: "KTUNOTES Moderator Team", file: `${code.replace(/\s+/g, '')}_Mod1_2.pdf` },
      { title: `Classroom Handouts and Slides (Module 3)`, author: "Prof. Peer Contributor", file: `${code.replace(/\s+/g, '')}_Mod3.pdf` },
      { title: `Modules 4 and 5 Exam Prep Kit`, author: "Royce Study Group", file: `${code.replace(/\s+/g, '')}_Mod4_5.pdf` }
    ],
    models: [
      { title: `${code} Model Exam Paper 2024`, year: 2024, file: `${code.replace(/\s+/g, '')}_Model2024.pdf` }
    ],
    pyqs: [
      { title: `${code} University Regular Exam 2023`, year: 2023, file: `${code.replace(/\s+/g, '')}_QP2023.pdf` },
      { title: `${code} University Regular Exam 2022`, year: 2022, file: `${code.replace(/\s+/g, '')}_QP2022.pdf` }
    ]
  };
}

export default academicDb;
