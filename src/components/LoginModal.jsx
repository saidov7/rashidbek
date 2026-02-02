import React from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-4">
      <div className="bg-white w-full max-w-[480px] rounded-[40px] p-10 relative animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute right-8 top-8 w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition"
        >
          ✕
        </button>

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Login</h2>
          <p className="text-gray-500 text-sm">Use the email and password that you login</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full border border-gray-200 p-4 rounded-2xl focus:border-[#3CB371] outline-none transition"
              defaultValue="test@mail.com"
            />
          </div>

          <div className="relative">
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full border border-red-400 p-4 rounded-2xl focus:border-red-500 outline-none transition"
              defaultValue="123456"
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400">👁️</span>
          </div>
          
          <div className="flex justify-between items-center px-1">
            <p className="text-red-500 text-xs">Entered the wrong password</p>
            <button className="text-gray-400 text-xs hover:underline">Forgot password</button>
          </div>

          <div className="pt-4 text-center">
            <p className="text-sm text-gray-600 mb-6">
              I want to <span className="font-bold cursor-pointer hover:underline">create an account</span>
            </p>
            <button className="w-full bg-[#3CB371] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#2e8b57] transition shadow-lg shadow-green-200 flex items-center justify-center gap-2">
              Login <span>→</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;