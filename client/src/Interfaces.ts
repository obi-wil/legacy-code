export interface Test {
  title: string;
  questions: Question[];
  assignedTo: string[];
  finsihedby: string[];
  testtype: string;
}

export interface Question {
  question: string;
  options: string[];
  answer: string;
  image: string;
}

export interface completedTest {
  id: string;
  title: string;
  result: {
    [k: string]: {
      percentage: number;
      questions: Question[];
    };
  };
}

export interface Student {
  name: string;
  pendingtests: Test[];
  completedTests: [];
}

export interface State {
  tests: Test[];
  role: string;
  students: string[];
  currentQuizz: Question;
  currentStudent: Student;
  progress: completedTest[];
}
