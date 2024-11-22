import React from "react";
import Typewriter from "typewriter-effect";
import "react-lazy-load-image-component/src/effects/blur.css";


export default function TypingEffect ({ content }){
    const transition = (duration) =>
        `transition duration-${duration} ease-in-out`;
    return (
        <span
            className={`text-2xl text-[#915EFF] md:text-4xl transform ${content.animated ? "translate-y-0" : content.styleTranslate
                } ${content.transition(2000)}`}
        >
            {content.header.text[2]}
            <span className="inline-block relative typing-effect">
                <Typewriter
                    options={{
                        strings: content.header.typical,
                        autoStart: true,
                        loop: true,
                        delay: 100, // Velocidad de escritura
                        deleteSpeed: 50, // Velocidad de borrado
                        cursor: "|", // Cursor personalizado
                    }}
                />
            </span>
        </span>
    );
};