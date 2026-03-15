export default function ContactContent() {
  return (
    <div className="px-4 py-2.5 text-outline text-sm">
      <address className="not-italic flex flex-col gap-4">
        <p>
          <span>For work, collaborations, or just saying hi — </span>
          <a
            href="mailto:youremail@example.com"
            className="inline-flex items-center gap-1 underline"
          >
            <span className="font-medium">youremail@example.com</span>
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </a>
        </p>

        <p className="italic">
          <span>Also available on </span>
          <a href="" target="_blank" rel="noreferrer" className="underline">
            LinkedIn
          </a>
          ,{" "}
          <a href="" target="_blank" rel="noreferrer" className="underline">
            Twitter/X
          </a>
          , and{" "}
          <a href="" target="_blank" rel="noreferrer" className="underline">
            GitHub
          </a>
          .
        </p>
      </address>
    </div>
  );
}
