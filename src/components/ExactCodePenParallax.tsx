'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { CodePenSVGDefs, CodePenClouds, CodePenBird } from './CodePenSVGAssets';
import { useTheme } from '@/providers/ThemeProvider';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function ExactCodePenParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    if (!containerRef.current) return;

    let speed = 100;
    const svgElement = containerRef.current.querySelector('svg');
    if (!svgElement) return;
    
    let height = svgElement.getBBox().height;

    // Initial setup - theme-aware
    gsap.set("#h2-1", { opacity: 0 });
    
    // Theme-dependent background setup
    if (isDark) {
      gsap.set("#moon_grad", { attr: { cy: "-50" } });
      gsap.set("#stars", { opacity: 0 });
      gsap.set("#shooting-star", { x: -200, y: 100, opacity: 0 });
    } else {
      gsap.set("#bg_grad", { attr: { cy: "-50" } });
      gsap.set(["#dinoL", "#dinoR"], { y: 80 });
      gsap.set("#dinoL", { x: -10 });
    }

    // Responsive setup
    const mm = gsap.matchMedia();
    mm.add("(max-width: 1922px)", () => {
      gsap.set(["#cloudStart-L", "#cloudStart-R"], { x: 10, opacity: 1 });
    });

    /* SCENE 1 */
    let scene1 = gsap.timeline();
    ScrollTrigger.create({
      animation: scene1,
      trigger: ".scrollElement",
      start: "top top",
      end: "45% 100%",
      scrub: 3
    });

    // Distant mountains animation (very slow for depth)
    scene1.to("#mountain-far-3", { y: 0.5 * speed, x: 0.2 * speed }, 0);
    scene1.to("#mountain-far-2", { y: 0.7 * speed, x: 0.3 * speed }, 0);
    scene1.to("#mountain-far-1", { y: 0.9 * speed, x: 0.4 * speed }, 0);

    // Hills animation
    scene1.to("#h1-1", { y: 3 * speed, x: 1 * speed, scale: 0.9, ease: "power1.in" }, 0);
    scene1.to("#h1-2", { y: 2.6 * speed, x: -0.6 * speed, ease: "power1.in" }, 0);
    scene1.to("#h1-3", { y: 1.7 * speed, x: 1.2 * speed }, 0.03);
    scene1.to("#h1-4", { y: 3 * speed, x: 1 * speed }, 0.03);
    scene1.to("#h1-5", { y: 2 * speed, x: 1 * speed }, 0.03);
    scene1.to("#h1-6", { y: 2.3 * speed, x: -2.5 * speed }, 0);
    scene1.to("#h1-7", { y: 5 * speed, x: 1.6 * speed }, 0);
    scene1.to("#h1-8", { y: 3.5 * speed, x: 0.2 * speed }, 0);
    scene1.to("#h1-9", { y: 3.5 * speed, x: -0.2 * speed }, 0);
    scene1.to("#cloudsBig-L", { y: 4.5 * speed, x: -0.2 * speed }, 0);
    scene1.to("#cloudsBig-R", { y: 4.5 * speed, x: -0.2 * speed }, 0);
    scene1.to("#cloudStart-L", { x: -300 }, 0);
    scene1.to("#cloudStart-R", { x: 300 }, 0);


    /*   Flying Element (Bird or Shooting Star)   */
    if (isDark) {
      // Shooting Star Animation
      gsap.fromTo(
        "#shooting-star",
        { opacity: 0, x: -200, y: 100 },
        {
          opacity: 1,
          x: 900,
          y: 300,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".scrollElement",
            start: "15% top",
            end: "60% 100%",
            scrub: 4,
            onEnter: function () {
              gsap.to("#shooting-star", { opacity: 1 });
            },
            onLeave: function () {
              gsap.to("#shooting-star", { opacity: 0 });
            }
          }
        }
      );
    } else {
      // Bird Animation
      gsap.fromTo(
        "#bird",
        { opacity: 1 },
        {
          y: -250,
          x: 800,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".scrollElement",
            start: "15% top",
            end: "60% 100%",
            scrub: 4,
            onEnter: function () {
              gsap.to("#bird", { scaleX: 1, rotation: 0 });
            },
            onLeave: function () {
              gsap.to("#bird", { scaleX: -1, rotation: -15 });
            }
          }
        }
      );
    }

    /* Clouds  */
    let clouds = gsap.timeline();
    ScrollTrigger.create({
      animation: clouds,
      trigger: ".scrollElement",
      start: "top top",
      end: "70% 100%",
      scrub: 1
    });

    clouds.to("#cloud1", { x: 500 }, 0);
    clouds.to("#cloud2", { x: 1000 }, 0);
    clouds.to("#cloud3", { x: -1000 }, 0);
    clouds.to("#cloud4", { x: -700, y: 25 }, 0);

    /* Sun/Moon motion Animation  */
    let celestialBody = gsap.timeline();
    ScrollTrigger.create({
      animation: celestialBody,
      trigger: ".scrollElement",
      start: "1% top",
      end: "2150 100%",
      scrub: 2
    });

    if (isDark) {
      // Moon motion and night sky
      celestialBody.fromTo("#moon_grad", { attr: { cy: "-50" } }, { attr: { cy: "330" } }, 0);
      celestialBody.to("#moon_grad stop:nth-child(1)", { attr: { "stop-color": "#E6E6FA" } }, 0);
      celestialBody.to("#moon_grad stop:nth-child(2)", { attr: { "stop-color": "#B0C4DE" } }, 0);
      celestialBody.to("#moon_grad stop:nth-child(3)", { attr: { "stop-color": "#2F4F4F" } }, 0);
      celestialBody.to("#moon_grad stop:nth-child(4)", { attr: { "stop-color": "#191970" } }, 0);
      celestialBody.to("#moon_grad stop:nth-child(5)", { attr: { "stop-color": "#0F0F23" } }, 0);
      celestialBody.to("#stars", { opacity: 1 }, 0);
    } else {
      // Sun motion
      celestialBody.fromTo("#bg_grad", { attr: { cy: "-50" } }, { attr: { cy: "330" } }, 0);
      celestialBody.to("#bg_grad stop:nth-child(2)", { attr: { offset: "0.15" } }, 0);
      celestialBody.to("#bg_grad stop:nth-child(3)", { attr: { offset: "0.18" } }, 0);
      celestialBody.to("#bg_grad stop:nth-child(4)", { attr: { offset: "0.25" } }, 0);
      celestialBody.to("#bg_grad stop:nth-child(5)", { attr: { offset: "0.46" } }, 0);
      celestialBody.to("#bg_grad stop:nth-child(6)", { attr: { "stop-color": "#FF9171" } }, 0);
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [theme, isDark]);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: -10 }}>
      {/* The exact SVG from CodePen will be inserted here */}
      <svg 
        className="parallax block w-full h-screen fixed top-0 left-0" 
        viewBox="0 0 750 500" 
        preserveAspectRatio="xMidYMax slice"
        style={{ zIndex: 3 }}
      >
        {/* All CodePen Gradients and Defs */}
        <CodePenSVGDefs />

        {/* Sky Background Image - Full Opacity */}
        <image 
          id="sky-bg"
          href={isDark ? "/images/nightsky.jpg" : "/images/daysky.jpg"}
          x="0" 
          y="0" 
          width="750" 
          height="500"
          preserveAspectRatio="xMidYMid slice"
          opacity="1.0"
        />


        {/* Distant Mountain Layers - Very Far Away */}
        <g id="distant-mountains" style={{ filter: 'blur(1px)', opacity: 0.6 }}>
          <path id="mountain-far-3"
            d="M0,200 Q100,180 200,190 T400,185 T600,180 T750,185 V350 H0 Z"
            fill={isDark ? "#2a2a3e" : "#B8A89A"}
          />
          <path id="mountain-far-2"
            d="M0,220 Q120,200 240,210 T480,205 T720,200 T750,205 V350 H0 Z"
            fill={isDark ? "#3a3a4e" : "#A69B8A"}
            style={{ opacity: 0.8 }}
          />
          <path id="mountain-far-1"
            d="M0,240 Q150,220 300,230 T600,225 T750,230 V350 H0 Z"
            fill={isDark ? "#4a4a5e" : "#948B7A"}
            style={{ opacity: 0.9 }}
          />
        </g>

        {/* CodePen Clouds */}
        <CodePenClouds />


        {/* Flying Element: Bird (light) or Shooting Star (dark) */}
        {isDark ? (
          <g id="shooting-star">
            {/* Main shooting star body with glow */}
            <circle cx="100" cy="150" r="4" fill="#fff" style={{ filter: 'drop-shadow(0 0 6px #87CEEB)' }}>
              <animate attributeName="r" values="3;5;3" dur="0.8s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.8;1;0.8" dur="0.6s" repeatCount="indefinite" />
            </circle>
            
            {/* Sparkle trail */}
            <g id="star-trail">
              <path d="M100,150 L140,190" stroke="#87CEEB" strokeWidth="3" opacity="0.8" strokeLinecap="round">
                <animate attributeName="opacity" values="0;0.8;0" dur="0.8s" repeatCount="indefinite" />
              </path>
              <path d="M105,155 L135,185" stroke="#B0E0E6" strokeWidth="2" opacity="0.6" strokeLinecap="round">
                <animate attributeName="opacity" values="0;0.6;0" dur="0.6s" repeatCount="indefinite" begin="0.1s" />
              </path>
              <path d="M110,160 L130,180" stroke="#F0F8FF" strokeWidth="1" opacity="0.4" strokeLinecap="round">
                <animate attributeName="opacity" values="0;0.4;0" dur="0.4s" repeatCount="indefinite" begin="0.2s" />
              </path>
            </g>
            
            {/* Sparkle particles */}
            <g id="sparkles">
              <circle cx="110" cy="160" r="1" fill="#87CEEB" opacity="0">
                <animate attributeName="opacity" values="0;1;0" dur="0.3s" repeatCount="indefinite" begin="0.1s" />
              </circle>
              <circle cx="120" cy="170" r="0.8" fill="#B0E0E6" opacity="0">
                <animate attributeName="opacity" values="0;1;0" dur="0.4s" repeatCount="indefinite" begin="0.3s" />
              </circle>
              <circle cx="125" cy="175" r="1.2" fill="#F0F8FF" opacity="0">
                <animate attributeName="opacity" values="0;1;0" dur="0.5s" repeatCount="indefinite" begin="0.2s" />
              </circle>
            </g>
          </g>
        ) : (
          <CodePenBird />
        )}

        {/* Stars for dark theme */}
        {isDark && (
          <g id="stars" fill="#fff" opacity="0">
            {/* Animated stars */}
            {[...Array(30)].map((_, i) => (
              <circle 
                key={i}
                cx={50 + (i * 23) % 650} 
                cy={50 + (i * 37) % 200} 
                r={0.5 + (i % 3) * 0.5}
                opacity={0.3 + (i % 4) * 0.2}
              >
                <animate 
                  attributeName="opacity" 
                  values={`${0.3 + (i % 4) * 0.2};1;${0.3 + (i % 4) * 0.2}`} 
                  dur={`${2 + (i % 3)}s`} 
                  repeatCount="indefinite"
                  begin={`${i * 0.1}s`}
                />
              </circle>
            ))}
          </g>
        )}

        {/* SCENE 1 - Hills that text goes behind */}
        <g id="scene1">
          <g id="hills1">
            <path id="h1-9"
              d="M696.36,409H75V335.47c10.19-.52,20.5-.36,30.05-3.65,8.11-2.8,15.84-8.49,23.78-11.33s18.18,1.84,25.36-4.85C165,305.56,172,289.79,186.71,292.8c6.21,1.27,12.09,3.66,18.43.84,6-2.65,9.73-9.46,14.69-13.54,2.87-2.35,6.42-3.2,9.35-5.49,1.65-1.28,5.45-6.37,7-6.92,7.94-2.93,10.34,2.69,18.56-3.47,6.45-4.84,8.52-8.21,15.45-5,5,2.35,11.89,10.09,16,15.37C294.9,286,302,297.77,312.71,307.53c11.62,10.63,21.59,9.37,34.67,5.83,16.12-4.37,18.32,9.06,32.24,15.28,7.45,3.32,13.23-1.7,19.6-2.08,3.64-.22,5.85,2.12,9.37,1.82,3.12-.27,4.08-4.44,8.33-3,7.32,12.31,15.75,20,28.21,20.59,14.32.7,27.12.76,39.73-4.94A145.24,145.24,0,0,0,502.11,332c8.71-5.36,11.22-2.82,19.35,1.5,11.66,6.21,25.31,1.08,36.56,9.18,5.53,4,8.36,12.23,14.64,14.79,4.86,2,15.59.38,20.4-1.18,13.47-4.38,21.52-16.59,36.56-17.33,13.57-.67,25.19-4.17,39.11-2.31,10.91,1.46,18.72-.1,27.63-2.61Z"
              fill={isDark ? "url(#grad1_dark)" : "url(#grad1)"} />
            <path id="h1-8"
              d="M750,500V212.49a19.09,19.09,0,0,0-11.54,8.17c-2.21,3.35-4.39,7.9-7.92,7.69-1.44-.08-2.78-1-4.23-1.08-5.12-.2-7.87,10.11-12.84,8.66a2.7,2.7,0,0,0-2.57-3.34c-1.49.1-2.72,1.38-3.77,2.67a46.94,46.94,0,0,0-7.7,14c-1.76-6-8.53-7.93-13.43-5.51s-8.31,7.76-11.48,12.87l-17.31,27.92c-4.54,7.33-11.47,15.57-18.52,12.15-3.38-1.64-5.76-5.76-9.32-6.73s-7.55,1.64-11.18.48c-5.45-1.76-8.37-11.36-14-10.4-3.13.54-5.93,4.55-8.87,3.14-1.52-.73-2.44-2.76-4-3.36s-3.32.52-5,1.13c-7.4,2.73-14.16-5.41-21.27-9.08-12.35-6.38-26.85,1.31-36.59,12.45-3.1,3.54-6,7.5-9.78,9.89-3.22,2-6.88,2.8-10.48,3.54L480,303.58c-15,3.07-30.14,6.2-44.07,13.54-6.63,3.48-13,7.91-19.94,10.16-10.83,3.5-22.26,1.5-33.47,1.18-9.18-.27-102.2,122.09-140,171.54Z"
              fill={isDark ? "url(#grad2_dark)" : "url(#grad2)"} />
            <path id="h1-7" d="M749.79,500,750,239.12c-.58-.62-1.15-1.25-1.74-1.87-5.67-5.95-12.57-12.05-20.78-11.77s-15.44,7.12-23.74,6.87c-7.55-.23-14.09-6.33-21.65-6.11-5.79.17-10.74,4-15.29,7.6C639.78,255.2,328.89,423.17,184.52,500Z"
              fill={isDark ? "url(#grad3_dark)" : "url(#grad3)"} />
            <path id="h1-6"
              d="M300.32,425.63c-7.78-5.38-17.22-7.93-25.57-12.43-14.59-7.87-25.69-21.55-39.79-29.71l-.42-3.55a7,7,0,0,0-1.09,2.71,51.13,51.13,0,0,0-7.74-3.43,7.19,7.19,0,0,0-.31-1.19c-.62-1.64-2.43-2.82-3.72-1.84q-.84-8.26-1.69-16.51a62.62,62.62,0,0,0-2.73,12.43l-1.17-3.48a19.73,19.73,0,0,0-.56,6.46c.05.58.12,1.19.13,1.79-1.51-.21-3-.39-4.55-.53q-.42-3-.82-6a2.73,2.73,0,0,0-.59-1.63c-.88-.85-2.11.31-2.8,1.37a60,60,0,0,0-1.47-12.2q-2,8-4,16.06a58.3,58.3,0,0,1-3-10.35l-1.34.65a53.76,53.76,0,0,0-1.85-12.48,59.91,59.91,0,0,0-2.46,6.52l-.24-22.71c-1.52.77-1.93,3-2.12,5l-1.77,17.15-.78-9.93-1.2,13.51c-.13,1.39-.82,3.26-2,2.83-.2-3.29-.41-6.58-.61-9.86a44.38,44.38,0,0,0-.86,12.34,18.5,18.5,0,0,1-.07,5.66,5.13,5.13,0,0,1-.41,1.11c-.92-.17-1.85-.33-2.77-.53a62.45,62.45,0,0,0-.61-14.65q-.52,7.14-1.06,14.28l-1.91-.44a14.36,14.36,0,0,0-1.77-3.85c-.07,1.13-.17,2.25-.28,3.38-2.83-.7-5.64-1.49-8.44-2.33a46.58,46.58,0,0,1-.7-7.73c0-2.21.08-4.65-1.13-6.35q-1.16,5.75-2.32,11.5l-2.94-5.22a10.84,10.84,0,0,1-1.43,2.94,70.76,70.76,0,0,1-2.06-19.48,5.51,5.51,0,0,0-.28-2.47c-.34-.74-1.22-1.21-1.81-.72a2.32,2.32,0,0,0-.58,1.35c-.62,3.45-.58,7.51-2.89,9.76a71.71,71.71,0,0,0-2.09-7.57c-2.17.41-.33,6-2.51,6.33a2.8,2.8,0,0,1-1.22-.29c-1.88-.61-4.05.95-4.43,3.18A36.92,36.92,0,0,0,138,349c-1,1-1.37,2.63-1.93,4.05s-1.61,2.84-2.94,2.73c-1.18-.09-2-1.43-2.29-2.79a16.05,16.05,0,0,1,.11-4.15,24,24,0,0,0-1.22-9.68q-1.32,6.12-2.65,12.23a2.46,2.46,0,0,1-.84,1.52l-1-.49a3.24,3.24,0,0,1-.19-.52q-.7-2.39-1.39-4.77a4.89,4.89,0,0,0-3.28,2.8q-2.15-1.11-4.28-2.25c-.4-1.45-.1-3.37-.22-5a14.5,14.5,0,0,0-1.82-5.32,28.44,28.44,0,0,1-1.43,8.47c-11.66-6.3-23.87-12.92-37.13-12.57C47.46,334,28.3,364.93,1,369.38V493H340.58C329.05,468.15,305.9,429.49,300.32,425.63Z"
              fill="url(#grad5)" />
          </g>
        </g>
      </svg>

      {/* Scroll Element */}
      <div 
        className="scrollElement absolute top-0 w-full pointer-events-none"
        style={{
          height: '6000px',
          zIndex: 4
        }}
      />
    </div>
  );
}
