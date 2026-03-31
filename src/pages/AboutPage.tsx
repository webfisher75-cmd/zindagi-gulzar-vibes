import { motion } from 'framer-motion';
import { Heart, Eye, Users, Sparkles } from 'lucide-react';
import Layout from '@/components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-12 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
              Our Story
            </h1>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              Zindagi Gulzar ek ehsaas hai – ek aisi jagah jahan har dil ki baat sunni jaati hai, 
              har aankh ka aansoo samjha jaata hai, aur har muskaan celebrate hoti hai.
            </p>
          </div>

          {/* Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {[
              {
                icon: Heart,
                title: 'Hamara Mission',
                desc: 'Har insaan ki kahani sunna aur usse duniya tak pahunchaana. Chahe woh ek maa ka pyaar ho, ek bete ki mehnat ho, ya ek ajnabi ki madad – har kahani important hai.',
              },
              {
                icon: Eye,
                title: 'Hamara Vision',
                desc: 'Ek aisi digital duniya banana jahan content sirf entertainment nahi, balki emotions, empathy aur positivity ka zariya ho.',
              },
              {
                icon: Users,
                title: 'Hamari Community',
                desc: '20 lakh+ logon ka ek parivaar jo har roz ek doosre ki kahaniyaan padhte hain, share karte hain, aur ek doosre ko support karte hain.',
              },
              {
                icon: Sparkles,
                title: 'Hamari Pehchaan',
                desc: 'Viral news, dil ko chhu lene wali kahaniyaan, rooh ko sukoon dene wali shayari, aur zindagi badalne wale quotes – sab ek jagah.',
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-6">
                <Icon size={24} className="text-primary mb-3" />
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="text-center bg-card border border-border rounded-2xl p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="relative">
              <p className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed mb-4">
                "Zindagi mein sabse khoobsurat cheez koi insaan nahi, 
                balki woh ehsaas hai jo koi insaan de jaata hai."
              </p>
              <span className="text-primary text-sm font-medium">— Zindagi Gulzar</span>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default AboutPage;
