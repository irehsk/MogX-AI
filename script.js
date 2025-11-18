/* Reset + base */
:root{
  --bg-900:#06060a;
  --panel-800:rgba(18,20,28,0.6);
  --glass: rgba(255,255,255,0.06);
  --accent-1:#4A6CF7;
  --accent-2:#3CC1FF;
  --muted:#9AA3B2;
  --white: #f6f7fb;
}
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  background:var(--bg-900);
  color:var(--white);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  overflow-x:hidden;
}

/* moving gradient orbs background */
.page-bg{position:fixed;inset:0;z-index:0;overflow:hidden}
.gradient-orb{
  position:absolute;filter:blur(120px);opacity:0.7;mix-blend-mode:screen;
}
.orb-1{width:700px;height:700px;left:-150px;top:-120px;background:linear-gradient(135deg,var(--accent-1),var(--accent-2))}
.orb-2{width:600px;height:600px;right:-120px;bottom:-160px;background:linear-gradient(180deg,var(--accent-2),#1f3bd7);transform:rotate(10deg)}

/* nav */
.nav{
  position:fixed;left:0;right:0;top:0;padding:14px 28px;display:flex;justify-content:space-between;align-items:center;
  z-index:40;background:linear-gradient(180deg, rgba(0,0,0,0.25), transparent);
  border-bottom:1px solid rgba(255,255,255,0.03);
}
.logo{font-weight:800;font-size:20px;letter-spacing:0.6px}
.logo span{color:var(--accent-1);margin-left:6px}
.tag{font-size:12px;color:var(--muted);margin-left:12px}

/* hero */
.main{position:relative;z-index:10;padding-top:110px;min-height:100vh;display:flex;flex-direction:column;align-items:center}
.hero{text-align:center;max-width:920px;padding:48px 20px}
.title{margin:0}
.hero h1{font-size:44px;margin:0 0 12px 0;line-height:1.02}
.lead{color:var(--muted);margin-bottom:20px}

/* buttons */
.btn{display:inline-block;padding:12px 18px;border-radius:12px;font-weight:600;text-decoration:none;cursor:pointer;border:1px solid transparent}
.btn.primary{background:linear-gradient(90deg,var(--accent-1),var(--accent-2));color:white;box-shadow:0 6px 20px rgba(74,108,247,0.18)}
.btn.ghost{background:transparent;color:var(--white);border:1px solid rgba(255,255,255,0.06);margin-left:12px}
.hero-actions{margin-top:18px}

/* chat wrapper: centered glass panel */
.chat-wrapper{
  position:fixed;right:40px;bottom:40px;width:420px;max-width:92vw;height:700px;display:flex;
  align-items:flex-end;justify-content:flex-end;z-index:60;opacity:0;pointer-events:none;transition:all .28s cubic-bezier(.2,.9,.3,1);
}
.chat-wrapper.open{opacity:1;pointer-events:auto;transform:translateY(0)}
.chat-panel{
  width:100%;height:100%;border-radius:14px;padding:0;backdrop-filter:blur(8px) saturate(120%);
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border:1px solid rgba(255,255,255,0.04);box-shadow:0 12px 40px rgba(2,6,23,0.55);display:flex;flex-direction:column;overflow:hidden;
}
.chat-header{padding:16px 18px;border-bottom:1px solid rgba(255,255,255,0.02);display:flex;flex-direction:column}
.chat-title{font-weight:700;color:var(--white)}
.chat-sub{color:var(--muted);font-size:13px}

/* the embedded frame container */
.chat-embed{flex:1;display:flex;align-items:stretch}
.chat-frame{width:100%;height:100%;border:0;background:transparent}

/* footer inside chat */
.chat-footer{padding:12px;border-top:1px solid rgba(255,255,255,0.02);display:flex;justify-content:flex-end}
.link-btn{background:none;border:0;color:var(--muted);cursor:pointer;padding:6px 10px;border-radius:8px}

/* features */
.features{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;max-width:1100px;padding:40px 18px;margin-top:24px}
.feature{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));padding:18px;border-radius:12px;border:1px solid rgba(255,255,255,0.03)}
.feature h3{margin:0 0 8px 0}
.feature p{margin:0;color:var(--muted)}

/* footer */
.footer{padding:28px;text-align:center;color:var(--muted);margin-top:30px}

/* responsive */
@media (max-width:880px){
  .features{grid-template-columns:1fr; padding:24px}
  .chat-wrapper{right:16px;left:16px;width:auto;height:64vh;bottom:18px}
  .hero h1{font-size:28px}
  .nav{padding:12px 16px}
}
