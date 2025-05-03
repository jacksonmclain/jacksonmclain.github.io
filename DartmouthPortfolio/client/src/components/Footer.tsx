import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-dartmouth-green text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="font-serif text-xl font-bold">Alexander Wilson</p>
            <p className="font-sans text-sm">Dartmouth College Graduate Student</p>
          </div>
          
          <div className="text-center mb-6 md:mb-0">
            <svg
              className="h-12 inline-block"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 190C149.706 190 190 149.706 190 100C190 50.2944 149.706 10 100 10C50.2944 10 10 50.2944 10 100C10 149.706 50.2944 190 100 190Z"
                fill="#00693E"
                stroke="white"
                strokeWidth="4"
              />
              <path
                d="M100 40V160M40 100H160"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M70 70L130 130M130 70L70 130"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          
          <div className="text-center md:text-right">
            <p className="font-sans text-sm">&copy; {new Date().getFullYear()} Alexander Wilson</p>
            <p className="font-sans text-xs mt-1">Design inspired by Ivy League tradition</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
