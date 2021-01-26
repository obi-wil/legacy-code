export interface Test {
  title: string;
  questions: Question[];
  id: string;
  assignedTo: string[];
  finsihedby: string[];
  testtype: string;
}

export interface CompletedTest {
  id: string;
  title: string;
  result: {
    percentage: number;
    questions: Question[];
  };
}

export interface PendingTest {
  id: string;
  title: string;
}

export interface Question {
  question: string;
  options: string[];
  answer: string;
  correct: boolean;
}

export interface CompletedTest {
  id: string;
  title: string;
  result: {
    percentage: number;
    questions: Question[];
  };
}

export interface Student {
  name: string;
  pendingtests: PendingTest[];
  completedtests: CompletedTest[];
}

export interface State {
  tests: Test[];
  role: string;
  students: string[];
  currentQuizz: Question;
  currentStudent: Student;
  progress: CompletedTest[];
}
