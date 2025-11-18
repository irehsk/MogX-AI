:root {
  --dark: #0a0a12;
  --panel: rgba(20, 24, 40, 0.6);
  --glass: rgba(255, 255, 255, 0.05);
  --blue1: #4A6CF7;
  --blue2: #3CC1FF;
  --white: #eceff4;
  --muted: #a0a8b7;
}

* { box-sizing: border-box; }

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: var(--dark);
  color: var(--white);
  font-family: 'Inter', sans-serif;
  overflow: hidden;
}

.background {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: -1;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(200px);
  opacity: 0.7;
  mix-blend-mode: screen;
}

.orb1 {
  width: 600px;
  height: 600px;
  top: -200px;
  left: -200px;
  background: linear-gradient(135deg, var(--blue1), var(--blue2));
}

.orb2 {
  width: 500px;
  height: 500px;
  bottom: -150px;
  right: -150px;
  background: linear-gradient(90deg, var(--blue2), var(--blue1));
}

.header {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
}

.logo {
  font-size: 24px;
  font-weight: 700;
}

.logo span {
  color: var(--blue1);
  margin-left: 4px;
}

.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  padding: 0 20px;
}

.hero h1 {
  font-size: 40px;
  margin-bottom: 16px;
}

.hero-sub {
  font-size: 18px;
  color: var(--muted);
  margin-bottom: 32px;
}

.btn {
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s;
}

.open-chat {
  background: linear-gradient(90deg, var(--blue1), var(--blue2));
  color: white;
}

.open-chat:hover {
  background: linear-gradient(90deg, var(--blue2), var(--blue1));
}

.chat-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 420px;
  max-width: 90vw;
  height: 600px;
  max-height: 90vh;
  background: var(--panel);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.8);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: 0;
  transition: all 0.4s ease-in-out;
  z-index: 100;
}

.chat-modal.open {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}

.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.chat-title {
  font-size: 20px;
  font-weight: 600;
}

.btn-close {
  background: none;
  color: var(--muted);
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.chat-frame {
  flex: 1;
  border: 0;
  width: 100%;
}

.footer {
  position: fixed;
  bottom: 16px;
  width: 100%;
  text-align: center;
  font-size: 14px;
  color: var(--muted);
}
