import { motion } from 'framer-motion';
import type { Mood } from '@/data/mockData';
import { moodEmojis, moodLabels } from '@/data/mockData';

interface MoodSelectorProps {
  selectedMood: Mood | null;
  onSelect: (mood: Mood | null) => void;
}

const moods: Mood[] = ['sad', 'love', 'motivation', 'alone', 'happy'];

const MoodSelector = ({ selectedMood, onSelect }: MoodSelectorProps) => {
  return (
    <div className="flex flex-col items-center py-8">
      <h3 className="font-display text-lg text-foreground mb-1">How are you feeling?</h3>
      <p className="text-xs text-muted-foreground mb-5">Select your mood for personalized content</p>
      <div className="flex gap-3 flex-wrap justify-center">
        {moods.map((mood) => (
          <motion.button
            key={mood}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(selectedMood === mood ? null : mood)}
            className={`flex flex-col items-center gap-1 px-5 py-3 rounded-xl transition-all border ${
              selectedMood === mood
                ? 'bg-primary text-primary-foreground border-primary gold-glow'
                : 'bg-card border-border text-muted-foreground hover:border-primary/50'
            }`}
          >
            <span className="text-2xl">{moodEmojis[mood]}</span>
            <span className="text-xs font-medium">{moodLabels[mood]}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
