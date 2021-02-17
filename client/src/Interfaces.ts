export interface Test {
  title: string;
  questions: Question[];
  id: string;
  _id: string;
  assignedTo: string[];
  finsihedby: string[];
  testtype: string;
  question?: Question;
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
  _id: string;
  question: string;
  options: string[];
  answer: string;
  correct: boolean;
  image: string;
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
  _id: string;
  name: string;
  pendingtests: PendingTest[];
  completedtests: CompletedTest[];
}

export interface State {
  tests: Test[];
  role: string;
  students: string[];
  currentQuizz: Test;
  currentStudent: Student;
  progress: Question[];
}
