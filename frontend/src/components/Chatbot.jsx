import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { portfolioData } from '@/mock';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: Date.now(),
          text: portfolioData.chatbot.greeting,
          sender: 'bot'
        }
      ]);
    }
  }, [isOpen, messages.length]);

  const findResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();
    const { knowledgeBase, fallback } = portfolioData.chatbot;

    for (const entry of knowledgeBase) {
      for (const keyword of entry.keywords) {
        // Use word boundary regex to avoid partial matches (e.g. "hi" in "his")
        const regex = new RegExp(`\\b${keyword}\\b`, 'i');
        if (regex.test(lowerInput)) {
          return entry.answer;
        }
      }
    }
    return fallback;
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const renderMessageWithLinks = (text) => {
    const parts = text.split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        const [, linkText, href] = match;
        return (
          <a
            key={index}
            href={href}
            onClick={(e) => handleLinkClick(e, href)}
            className="text-blue-500 dark:text-blue-400 underline font-semibold hover:text-blue-700 dark:hover:text-blue-300"
          >
            {linkText}
          </a>
        );
      }
      return part;
    });
  };

  const sendUserMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      text,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponseText = findResponse(text);
      const botMessage = {
        id: Date.now() + 1,
        text: botResponseText,
        sender: 'bot',
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendUserMessage(inputValue);
    setInputValue('');
  };

  const handleSuggestionClick = (question) => {
    sendUserMessage(question);
  };

  return (
    <>
      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-5 sm:right-8 w-80 sm:w-96 h-[500px] bg-white dark:bg-slate-800 rounded-xl shadow-2xl flex flex-col transition-all duration-300 ease-in-out z-50 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-t-xl">
          <div className="flex items-center space-x-2">
            <Bot className="h-6 w-6" />
            <h3 className="font-bold text-lg">Muhammed's Assistant</h3>
          </div>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-white hover:bg-blue-700">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                  <Bot size={20} />
                </div>
              )}
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  msg.sender === 'bot'
                    ? 'bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-gray-200 rounded-bl-none'
                    : 'bg-blue-600 text-white rounded-br-none'
                }`}
              >
                <p className="text-sm leading-relaxed">{renderMessageWithLinks(msg.text)}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex items-end gap-2 justify-start">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white flex-shrink-0">
                <Bot size={20} />
              </div>
              <div className="max-w-[80%] p-3 rounded-2xl bg-gray-100 dark:bg-slate-700 rounded-bl-none">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {isOpen && messages.length === 1 && (
          <div className="p-4 border-t border-gray-200 dark:border-slate-700">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
              Or try one of these:
            </p>
            <div className="flex flex-wrap gap-2">
              {portfolioData.chatbot.suggestedQuestions.map((q, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSuggestionClick(q)}
                  className="text-blue-600 border-blue-200 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400/30 dark:hover:bg-slate-700 h-auto py-1.5 px-3 text-left"
                >
                  {q}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="p-4 border-t border-gray-200 dark:border-slate-700">
          <form onSubmit={handleFormSubmit} className="flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Ask something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-gray-100 dark:bg-slate-700 border-transparent focus:ring-blue-500"
            />
            <Button type="submit" size="icon" className="bg-blue-600 hover:bg-blue-700">
              <Send className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>

      {/* FAB Trigger */}
      <Button
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg z-50 transition-transform duration-300 hover:scale-110"
      >
        {isOpen ? <X className="h-7 w-7" /> : <MessageSquare className="h-7 w-7" />}
      </Button>
    </>
  );
};

export default Chatbot;