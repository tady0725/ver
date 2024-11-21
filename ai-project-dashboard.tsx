import React, { useState, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Bot, 
  Brain, 
  Code, 
  Database, 
  Cpu, 
  Target, 
  Zap, 
  Shield, 
  Layers 
} from 'lucide-react';

const AIDashboard = () => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index, e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.transform = `perspective(1000px) rotateX(${(y - rect.height / 2) / 20}deg) rotateY(${-(x - rect.width / 2) / 20}deg) scale3d(1.05, 1.05, 1.05)`;
    card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06)';
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
  };

  const projectCards = [
    { 
      title: "自然語言處理", 
      icon: <Brain className="w-12 h-12 text-blue-600"/>,
      description: "先進的語言理解系統",
      link: "/nlp-system",
      bgColor: "bg-blue-50"
    },
    { 
      title: "機器視覺", 
      icon: <Cpu className="w-12 h-12 text-green-600"/>,
      description: "智能圖像識別",
      link: "/computer-vision",
      bgColor: "bg-green-50"
    },
    { 
      title: "預測模型", 
      icon: <Target className="w-12 h-12 text-purple-600"/>,
      description: "數據驅動的預測引擎",
      link: "/prediction-models",
      bgColor: "bg-purple-50"
    },
    { 
      title: "智能機器人", 
      icon: <Bot className="w-12 h-12 text-red-600"/>,
      description: "自主交互系統",
      link: "/robotics",
      bgColor: "bg-red-50"
    },
    { 
      title: "數據分析", 
      icon: <Database className="w-12 h-12 text-indigo-600"/>,
      description: "深度數據洞察",
      link: "/data-analysis",
      bgColor: "bg-indigo-50"
    },
    { 
      title: "安全AI", 
      icon: <Shield className="w-12 h-12 text-yellow-600"/>,
      description: "安全與隱私保護",
      link: "/ai-security",
      bgColor: "bg-yellow-50"
    },
    { 
      title: "算法優化", 
      icon: <Zap className="w-12 h-12 text-orange-600"/>,
      description: "高效能算法研究",
      link: "/algorithm-optimization",
      bgColor: "bg-orange-50"
    },
    { 
      title: "模型架構", 
      icon: <Layers className="w-12 h-12 text-pink-600"/>,
      description: "創新神經網絡設計",
      link: "/model-architecture",
      bgColor: "bg-pink-50"
    },
    { 
      title: "跨域應用", 
      icon: <Code className="w-12 h-12 text-teal-600"/>,
      description: "AI跨領域整合",
      link: "/interdisciplinary-ai",
      bgColor: "bg-teal-50"
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          AI 技術儀表板
        </h1>
        
        <div className="grid grid-cols-3 gap-8">
          {projectCards.map((card, index) => (
            <a 
              key={index} 
              href={card.link}
              ref={(el) => cardRefs.current[index] = el}
              onMouseMove={(e) => handleMouseMove(index, e)}
              onMouseLeave={() => handleMouseLeave(index)}
              className="transform transition-all duration-300 ease-in-out"
            >
              <Card 
                className={`
                  p-6 rounded-2xl shadow-md 
                  transition-all duration-300 
                  h-full flex flex-col items-center
                  ${card.bgColor}
                `}
              >
                <div className="flex flex-col items-center text-center h-full justify-center">
                  {card.icon}
                  <div className="h-20 flex flex-col justify-center">
                    <h2 className="mt-4 text-xl font-semibold text-gray-800">
                      {card.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 h-12 flex items-center justify-center">
                      {card.description}
                    </p>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIDashboard;
