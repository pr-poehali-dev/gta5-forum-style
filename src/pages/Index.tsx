import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface ForumTopic {
  id: number;
  title: string;
  author: string;
  avatar: string;
  category: string;
  replies: number;
  views: number;
  lastPost: string;
  isHot: boolean;
  isPinned: boolean;
}

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все разделы', icon: 'LayoutGrid', color: 'gta-gradient' },
    { id: 'news', name: 'Новости', icon: 'Newspaper', color: 'gta-gradient' },
    { id: 'general', name: 'Общение', icon: 'MessageSquare', color: 'gta-orange-gradient' },
    { id: 'help', name: 'Поддержка', icon: 'LifeBuoy', color: 'bg-blue-600' },
    { id: 'reports', name: 'Жалобы', icon: 'AlertTriangle', color: 'bg-red-600' },
  ];

  const topics: ForumTopic[] = [
    {
      id: 1,
      title: 'Обновление сервера: Новые районы Лос-Сантоса',
      author: 'Администратор',
      avatar: '/placeholder.svg',
      category: 'news',
      replies: 145,
      views: 2847,
      lastPost: '2 минуты назад',
      isHot: true,
      isPinned: true,
    },
    {
      id: 2,
      title: 'Улучшена система экономики - детали внутри',
      author: 'DevTeam',
      avatar: '/placeholder.svg',
      category: 'news',
      replies: 89,
      views: 1563,
      lastPost: '15 минут назад',
      isHot: true,
      isPinned: true,
    },
    {
      id: 3,
      title: 'Обсуждение: Лучшие места для заработка',
      author: 'ProGamer',
      avatar: '/placeholder.svg',
      category: 'general',
      replies: 234,
      views: 4521,
      lastPost: '1 час назад',
      isHot: true,
      isPinned: false,
    },
    {
      id: 4,
      title: 'Помощь новичкам: Гайд по началу игры',
      author: 'Mentor',
      avatar: '/placeholder.svg',
      category: 'help',
      replies: 67,
      views: 1234,
      lastPost: '2 часа назад',
      isHot: false,
      isPinned: false,
    },
    {
      id: 5,
      title: 'Жалоба на игрока: нарушение правил',
      author: 'Player123',
      avatar: '/placeholder.svg',
      category: 'reports',
      replies: 12,
      views: 456,
      lastPost: '30 минут назад',
      isHot: false,
      isPinned: false,
    },
  ];

  const filteredTopics = activeCategory === 'all' 
    ? topics 
    : topics.filter(topic => topic.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-primary/20 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 gta-gradient rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-primary gta-text-shadow">GTA V RUSSIA</h1>
                <p className="text-xs text-muted-foreground">ROLEPLAY FORUM</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="border-primary text-primary">
                <Icon name="Users" size={14} className="mr-1" />
                1,234 онлайн
              </Badge>
              <Badge variant="outline" className="border-secondary text-secondary">
                <Icon name="MessageCircle" size={14} className="mr-1" />
                5,678 тем
              </Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                px-6 py-3 rounded-lg font-semibold uppercase text-sm tracking-wider
                transition-all duration-300 hover-glow
                ${activeCategory === cat.id 
                  ? `${cat.color} text-white shadow-lg` 
                  : 'bg-card text-foreground hover:bg-card/80'}
              `}
            >
              <div className="flex items-center gap-2">
                <Icon name={cat.icon as any} size={18} />
                {cat.name}
              </div>
            </button>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4 bg-gradient-to-br from-green-600 to-green-700 border-0 hover-glow cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon name="TrendingUp" size={24} className="text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">8,456</p>
                <p className="text-xs text-white/80 uppercase">Всего тем</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-orange-600 to-orange-700 border-0 hover-glow cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon name="Users" size={24} className="text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">12,345</p>
                <p className="text-xs text-white/80 uppercase">Игроков</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-blue-600 to-blue-700 border-0 hover-glow cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon name="MessageSquare" size={24} className="text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">45,678</p>
                <p className="text-xs text-white/80 uppercase">Сообщений</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-gradient-to-br from-yellow-600 to-yellow-700 border-0 hover-glow cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Icon name="Flame" size={24} className="text-white" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">234</p>
                <p className="text-xs text-white/80 uppercase">Горячих тем</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Topics List */}
        <div className="space-y-3">
          {filteredTopics.map((topic) => (
            <Card 
              key={topic.id} 
              className="p-5 bg-card/50 backdrop-blur-sm border-border/50 hover-glow cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <Avatar className="w-14 h-14 border-2 border-primary/30">
                  <AvatarImage src={topic.avatar} />
                  <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                    {topic.author[0]}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <div className="flex items-start gap-2 mb-2">
                    {topic.isPinned && (
                      <Badge className="bg-primary text-primary-foreground">
                        <Icon name="Pin" size={12} className="mr-1" />
                        ЗАКРЕПЛЕНО
                      </Badge>
                    )}
                    {topic.isHot && (
                      <Badge className="bg-secondary text-secondary-foreground">
                        <Icon name="Flame" size={12} className="mr-1" />
                        ГОРЯЧЕЕ
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {topic.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="font-medium text-primary">{topic.author}</span>
                    <span className="flex items-center gap-1">
                      <Icon name="MessageSquare" size={14} />
                      {topic.replies}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="Eye" size={14} />
                      {topic.views}
                    </span>
                    <span className="flex items-center gap-1 ml-auto">
                      <Icon name="Clock" size={14} />
                      {topic.lastPost}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-primary/20 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2024 GTA V Russia RP. Все права защищены.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Правила
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Помощь
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
