import { useEffect, useState } from 'react';
import { useLanguage } from '@/lib/use-language';

export default function Countdown() {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2026-09-21T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days,    label: t('countdown.days') },
    { value: timeLeft.hours,   label: t('countdown.hours') },
    { value: timeLeft.minutes, label: t('countdown.minutes') },
    { value: timeLeft.seconds, label: t('countdown.seconds') },
  ];

  return (
    <div className="backdrop-blur-md bg-black/50 border border-yellow-500/25 rounded-2xl p-4 sm:p-6 max-w-xl mx-4 sm:ml-12 sm:mx-0 shadow-2xl shadow-black/50 ring-1 ring-yellow-500/10 -mt-20">
      <h3 className="text-sm sm:text-lg font-extrabold text-center mb-4 sm:mb-5 tracking-widest uppercase text-white/80">
        <span className="text-yellow-400 font-extrabold">i</span>ESC 2026 · Solar Racing Challenge
      </h3>
      <div className="flex justify-center gap-2 sm:gap-3">
        {units.map(({ value, label }) => (
          <div
            key={label}
            className="flex flex-col items-center bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-3 sm:px-5 py-3 sm:py-4 min-w-[60px] sm:min-w-[72px] backdrop-blur-sm"
          >
            <span className="text-2xl sm:text-4xl font-black text-yellow-400 tabular-nums leading-none">
              {String(value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs font-semibold text-white/50 mt-1 sm:mt-2 uppercase tracking-wider">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
