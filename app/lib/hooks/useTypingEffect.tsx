import { useState, useEffect, useCallback, useMemo } from 'react';
import { shuffleArray } from '@/app/lib/utils/array';

export const useTypingEffect = (descriptions: string[]) => {
    const shuffledDescriptions = useMemo(() => shuffleArray(descriptions), [descriptions]);
    const [description, setDescription] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    const handleTyping = useCallback(() => {
        const i = loopNum % shuffledDescriptions.length;
        const fullDescription = shuffledDescriptions[i];

        setDescription(isDeleting
            ? fullDescription.substring(0, description.length - 1)
            : fullDescription.substring(0, description.length + 1)
        );

        setTypingSpeed(isDeleting ? 30 : 100);

        if (!isDeleting && description === fullDescription) {
            setTimeout(() => setIsDeleting(true), 500);
        } else if (isDeleting && description === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
        }
    }, [description, isDeleting, loopNum, shuffledDescriptions]);

    useEffect(() => {
        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [handleTyping, typingSpeed]);

    return description;
};
