export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-2xl max-w-sm w-full text-center shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Welcome 👋</h2>
        <p className="text-gray-600 mb-6">
          You successfully clicked the Get Started button.
        </p>
        <button
          onClick={onClose}
          className="bg-red-500 text-white w-full py-2 rounded-lg hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
