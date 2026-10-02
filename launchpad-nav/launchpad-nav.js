/* <launchpad-nav> \u2014 Launchpad's top nav bar, for every app the bar links to.
 *
 * GENERATED FILE. Do not edit public/assets/shared-nav/launchpad-nav.js by
 * hand, and do not edit the copies vendored into the apps: edit
 * shared-nav/launchpad-nav.src.js in nda-launchpad and run
 * `node shared-nav/build.mjs`. The build fills in the app list from the hub's
 * <template id="lp-app-directory"> and the styles from the hub's own CSS, so
 * the bar looks and behaves the same here as it does on the hub.
 *
 * Use: put <launchpad-nav></launchpad-nav> first in <body> and load this file
 * with a plain <script src=".../launchpad-nav.js" defer>. The fonts live in a
 * fonts/ folder next to it. The bar sits in a shadow root, so the app's CSS
 * cannot reach it and its CSS cannot reach the app. It publishes its height
 * as --lp-nav-height on <html>, so an app's own sticky bar can sit under it
 * with `top: var(--lp-nav-height, 0px)`.
 */
(function () {
  'use strict';
  if (customElements.get('launchpad-nav')) return;

  const HUB = 'https://nda-launchpad.vercel.app/';
  const CSS = ".lp-root{all:initial;display:block;font-family:var(--lp-body);color:var(--lp-ink);line-height:1.5;-webkit-font-smoothing:antialiased}\n.lp-root *,.lp-root *::before,.lp-root *::after{box-sizing:border-box}\n.lp-root{--nd-paper:#EFECE3;--nd-surface:#FFFFFF;--nd-kalk:#DDD9C3;--nd-ink:#16130F;--nd-ink-muted:#16130Fa6;--nd-rooi:#C6302A;--nd-oranje:#DC6919;--nd-geel:#E7B21B;--nd-groen:#1C7A4E;--nd-blou:#1B4C9E;--nd-pers:#69398F;--nd-bruin:#8A4A28;--nd-turkoois:#0E6B66;--nd-accent:var(--nd-oranje);--nd-accent-cool:var(--nd-turkoois);--nd-course-accent:var(--course-accent, var(--nd-turkoois));--nd-course-contrast:var(--course-accent-contrast, var(--nd-paper));--nd-ochre-bg:#FAF3E5;--nd-ochre-badge:#DCA13D;--nd-ochre-text:#1A1A1A;--nd-lavender-bg:#F3EFF8;--nd-lavender-badge:#EDE7F6;--nd-lavender-text:#4A3B69;--nd-lavender-border:#7E6E9B;--nd-forest-bg:#EBF7F0;--nd-forest-badge:#185339;--nd-forest-text:#FFFFFF;--nd-cyan-bg:#D0F2F6;--nd-cyan-badge:#08525E;--nd-cyan-text:#08525E;--nd-cyan-border:#08525E;--nd-slate-bg:#1C2833;--nd-slate-text:#FFFFFF;--nd-state-done:var(--nd-forest-badge);--nd-state-active:var(--nd-cyan-badge);--nd-state-ready:var(--nd-ochre-badge);--nd-state-waiting:var(--nd-lavender-border);--nd-state-parked:var(--nd-slate-bg);--nd-state-blocked:var(--nd-rooi);--nd-font-display:\"Archivo\", sans-serif;--nd-font-body:\"Familjen Grotesk\", \"Segoe UI\", system-ui, sans-serif;--nd-font-stat:\"Martian Mono\", ui-monospace, Consolas, monospace;--nd-text-xs:11px;--nd-text-sm:13px;--nd-text-base:16px;--nd-text-lg:20px;--nd-text-xl:28px;--nd-text-2xl:40px;--nd-tracking-stat:0.05em;--nd-radius:0px;--nd-border:2px;--nd-border-heavy:4px;--nd-rule:var(--nd-border) solid var(--nd-ink);--nd-shadow:4px 4px 0 var(--nd-ink);--nd-shadow-pressed:2px 2px 0 var(--nd-ink);--nd-shadow-flat:0 0 0 var(--nd-ink);--nd-shadow-alert:4px 4px 0 var(--nd-oranje);--nd-s1:15px;--nd-s2:30px;--nd-s3:60px;--nd-gap:10px}\n.lp-root{color:var(--nd-ink);font-family:var(--nd-font-body);font-size:var(--nd-text-base);line-height:1.45;-webkit-font-smoothing:antialiased}\n.lp-root *,.lp-root *::before,.lp-root *::after{border-radius:var(--nd-radius);box-sizing:border-box}\n.lp-root{--lp-paper:var(--nd-paper, #EFECE3);--lp-surface:var(--nd-surface, var(--nd-paper));--lp-kalk:var(--nd-kalk, #DDD9C3);--lp-ink:var(--nd-ink, #16130F);--lp-muted:var(--nd-ink-muted, rgba(22,19,15,0.65));--lp-oranje:var(--nd-oranje, #DC6919);--lp-turkoois:var(--nd-turkoois, #0E6B66);--lp-blou:var(--nd-blou, #1B4C9E);--lp-pers:var(--nd-pers, #69398F);--lp-groen:var(--nd-groen, #1C7A4E);--lp-geel:var(--nd-geel, #E7B21B);--lp-rooi:var(--nd-rooi, #C6302A);--lp-bruin:var(--nd-bruin, #8A4A28);--lp-done:var(--nd-state-done, #185339);--lp-ready:var(--nd-state-ready, #DCA13D);--lp-waiting:var(--nd-state-waiting, #7E6E9B);--lp-ochre:var(--nd-ochre-bg, #FAF3E5);--lp-cyan:var(--nd-cyan-bg, #D0F2F6);--lp-display:var(--nd-font-display, 'Archivo', sans-serif);--lp-body:var(--nd-font-body, 'Familjen Grotesk', system-ui, sans-serif);--lp-mono:var(--nd-font-stat, 'Martian Mono', monospace);--lp-rule-landmark:2px solid var(--lp-ink);--lp-rule-telemetry:1px solid var(--lp-ink);--lp-rosegold:#B76E79;--lp-rosegold-deep:#8E4A55;--lp-rosegold-tint:#F7EFF0;--nda-canvas-primary:#F4F7FA;--nda-canvas-secondary:#2A3869;--nda-canvas-container:#FFFFFF;--nda-ink-primary:#1A1A1A;--nda-ink-secondary:#5C6B89;--nda-identity-secondary:#F2A223;--nda-action-primary:#DC6919;--nda-action-hover:#B55312;--nda-ui-lines:#D3D9E8;--nda-sp-1:10px;--nda-sp-2:20px;--nda-sp-3:40px;--nda-sp-5:80px;--nda-stroke-base:3px;--nda-shadow-sm:4px 4px 0px var(--nda-ink-primary);--nda-shadow-md:6px 6px 0px var(--nda-ink-primary)}\n.lp-root{color:var(--lp-ink);font-family:var(--lp-body);font-size:15px;line-height:1.5}\na{color:var(--lp-ink)}\na:hover{color:var(--lp-oranje)}\n.lp-header,.lp-topbar{position:sticky;top:0;z-index:50;background:var(--nda-canvas-container);border-bottom:var(--lp-rule-landmark);padding:10px 15px}\n@media (min-width: 640px){.lp-header{padding:10px 30px}}\n.lp-header::before,.lp-topbar::before{content:\"\";position:absolute;inset:0 0 auto 0;height:4px;background:var(--lp-stance-accent, transparent);pointer-events:none}\n.lp-header__inner{max-width:1280px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}\n.lp-header__brand{display:flex;align-items:center;gap:10px;text-decoration:none;flex-shrink:0}\n.lp-header__mark{width:auto;height:32px;display:block;flex-shrink:0}\n.lp-header__title{font-family:var(--lp-display);font-size:16px;font-weight:800;text-transform:uppercase;letter-spacing:-0.01em;line-height:1}\n.lp-header__hub{font-family:var(--lp-mono);font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;background:var(--lp-turkoois);color:var(--lp-paper);border:var(--lp-rule-telemetry);padding:1px 5px;margin-left:7px;vertical-align:2px}\n.lp-header__input{width:100%;box-sizing:border-box;font-family:var(--lp-mono);font-size:11px;font-weight:700;letter-spacing:0.03em;padding:7px 11px;border:var(--lp-rule-telemetry);background:var(--lp-surface);color:var(--lp-ink);border-radius:0}\n.lp-header__input::placeholder{color:var(--lp-muted);font-weight:400}\n.lp-header__input:focus-visible{outline:2px solid var(--lp-turkoois);outline-offset:2px}\n.lp-rail__num{font-family:var(--lp-mono);font-size:10px;font-weight:700;line-height:1;background:var(--lp-kalk);border:var(--lp-rule-telemetry);padding:3px 6px;flex-shrink:0}\n.lp-rail__rule{flex:1;min-width:12px;height:0;border-top:1px solid var(--lp-ink)}\n.lp-header__btn{display:inline-flex;align-items:center;gap:8px;font-family:var(--lp-mono);font-size:10.5px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;padding:6px 12px;border:2px solid var(--lp-ink);background:var(--lp-surface);color:var(--lp-ink);border-radius:0;cursor:pointer;box-shadow:2px 2px 0px var(--lp-ink);transition:transform 0.08s ease, box-shadow 0.08s ease, background 0.08s ease}\n.lp-header__btn:hover{transform:translate(-1px, -1px);box-shadow:3px 3px 0px var(--lp-ink);background:var(--lp-ochre)}\n.lp-header__btn:focus-visible{outline:2px solid var(--lp-turkoois);outline-offset:2px}\n.lp-header__btn-icon{font-size:13px}\n.lp-header__btn-label{font-weight:800}\n.lp-header__btn-count{font-size:9px;background:var(--lp-kalk);border:1px solid var(--lp-ink);padding:1px 5px;letter-spacing:0.05em}\n.lp-header__input::placeholder{color:var(--lp-muted);font-weight:400;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}\n@media (pointer: coarse){.lp-header__btn{min-height:44px !important;min-width:44px !important;display:inline-flex !important;align-items:center !important;justify-content:center !important;box-sizing:border-box !important}}\n@media (max-width: 480px){.lp-header{padding:6px 12px !important}.lp-header__inner{gap:6px !important}.lp-header__input{padding:5px 9px !important}}\n.lp-rail__num{font-size:11px;font-weight:800;color:var(--lp-ink);padding:2px 6px;background:var(--lp-kalk);border:var(--lp-rule-telemetry);line-height:1;letter-spacing:0.05em;flex-shrink:0}\n.lp-rail__rule{flex:1;height:1px;background:var(--lp-ink);opacity:0.25;min-width:12px}\n@media (prefers-reduced-motion: reduce){[style*='animation:dk-march'],[style*='animation: dk-march']{animation:none !important}[style*='animation:dk-breathe'],[style*='animation: dk-breathe']{animation:none !important}[style*='animation:dk-drift'],[style*='animation: dk-drift']{animation:none !important}[style*='animation:dk-wave'],[style*='animation: dk-wave']{animation:none !important}[style*='animation:dk-blink'],[style*='animation: dk-blink']{animation:none !important}[style*='animation:dk-tick'],[style*='animation: dk-tick']{animation:none !important}[style*='animation:lp-arrive'],[style*='animation: lp-arrive']{animation:none !important}}\n.lp-nav__inner{flex-wrap:nowrap;gap:15px;min-height:40px}\n.lp-nav__vh{position:absolute;width:1px;height:1px;margin:-1px;padding:0;border:0;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}\n.lp-nav__apps{display:flex;flex:0 0 auto}\n.lp-nav--compact .lp-nav__apps{display:none}\n.lp-nav--snug .lp-nav__inner{gap:10px}\n.lp-nav--snug .lp-nav__trigger{padding:0 7px}\n.lp-nav--snug .lp-header__hub{display:none}\n.lp-nav--snug .lp-nav__playbooks .lp-header__btn-label{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}\n.lp-nav__list{display:flex;align-items:center;gap:2px;margin:0;padding:0;list-style:none}\n.lp-nav__item{position:relative}\n.lp-nav__trigger{display:inline-flex;align-items:center;gap:6px;height:36px;padding:0 10px;box-sizing:border-box;font-family:var(--lp-mono);font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;white-space:nowrap;color:var(--lp-ink);background:transparent;border:2px solid transparent;border-radius:0;cursor:pointer;text-decoration:none}\n.lp-nav__trigger:hover{color:var(--lp-ink);background:var(--lp-surface);border-color:var(--lp-ink)}\n.lp-nav__trigger[aria-expanded=\"true\"]{color:var(--lp-paper);background:var(--lp-ink);border-color:var(--lp-ink)}\n.lp-nav__trigger:focus-visible{outline:2px solid var(--lp-turkoois);outline-offset:2px}\n.lp-nav__caret{font-size:9px;line-height:1;transition:transform 0.12s ease}\n.lp-nav__trigger[aria-expanded=\"true\"] .lp-nav__caret{transform:rotate(180deg)}\n.lp-nav__menu{position:absolute;top:calc(100% + 12px);left:0;z-index:60;width:360px;max-width:calc(100vw - 30px);max-height:calc(100vh - 90px);overflow-y:auto;overscroll-behavior:contain;background:var(--lp-surface);border:var(--lp-rule-landmark);box-shadow:4px 4px 0 var(--lp-ink)}\n.lp-nav__menu[hidden]{display:none}\n.lp-nav__menu:focus,.lp-nav__drawer:focus{outline:none}\n.lp-nav__menu--end{left:auto;right:0}\n.lp-nav__menu-head,.lp-nav__group-head{display:flex;align-items:center;gap:10px;margin:0;font-family:var(--lp-mono);font-size:10px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--lp-ink)}\n.lp-nav__menu-head{padding:10px 15px;background:var(--lp-paper);border-bottom:var(--lp-rule-landmark)}\n.lp-nav__menu-head-title,.lp-nav__group-head-title{flex:1;min-width:0}\n.lp-nav__menu-head-count,.lp-nav__group-head-count{color:var(--lp-muted)}\n.lp-nav__list-apps{margin:0;padding:0;list-style:none}\n.lp-nav__list-apps > li + li{border-top:var(--lp-rule-telemetry)}\n.lp-nav__list-apps > li[hidden]{display:none}\n.lp-nav__app{display:grid;grid-template-columns:24px minmax(0, 1fr);align-items:center;gap:10px;padding:10px 15px 10px 11px;border-left:4px solid var(--lp-ink);color:var(--lp-ink);text-decoration:none}\n.lp-nav__app:hover{color:var(--lp-ink);background:var(--lp-ochre)}\n.lp-nav__app:focus-visible{outline:2px solid var(--lp-turkoois);outline-offset:-2px}\n.lp-nav__icon{display:block;width:24px;height:24px}\n.lp-nav__app-body{display:flex;flex-direction:column;gap:2px;min-width:0}\n.lp-nav__app-title{font-family:var(--lp-display);font-size:14px;font-weight:700;line-height:1.15;text-transform:uppercase;letter-spacing:-0.01em}\n.lp-nav__app-desc{font-size:12px;line-height:1.3;color:var(--lp-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.lp-nav__tools{display:flex;align-items:center;gap:10px;margin-left:auto;flex-shrink:0}\n.lp-nav__action[data-focus-toggle][aria-pressed=\"true\"]{background:var(--lp-ink);color:var(--lp-paper)}\n.lp-nav__action[data-focus-toggle][aria-pressed=\"true\"] .lp-header__btn-count{background:var(--lp-paper);color:var(--lp-ink)}\n[data-focus-feature]{transition:opacity 0.25s ease, filter 0.25s ease}\n@media (prefers-reduced-motion: reduce){[data-focus-feature]{transition:none}}\n.lp-nav__playbooks{height:36px;box-sizing:border-box}\n.lp-nav__burger{display:inline-flex;align-items:center;gap:8px;height:36px;padding:0 12px;box-sizing:border-box;font-family:var(--lp-mono);font-size:10.5px;font-weight:800;letter-spacing:0.05em;text-transform:uppercase;color:var(--lp-paper);background:var(--lp-ink);border:2px solid var(--lp-ink);border-radius:0;cursor:pointer}\n.lp-nav__burger:hover,.lp-nav__burger[aria-expanded=\"true\"]{color:var(--lp-ink);background:var(--lp-ochre)}\n.lp-nav__burger:focus-visible{outline:2px solid var(--lp-turkoois);outline-offset:2px}\n.lp-nav__burger-icon{display:inline-flex;flex-direction:column;justify-content:center;gap:3px;width:16px}\n.lp-nav__burger-icon > span{display:block;height:2px;background:currentColor}\n.lp-nav__scrim{position:fixed;inset:0;z-index:65;background:color-mix(in srgb, var(--lp-ink) 45%, transparent)}\n.lp-nav__drawer{position:fixed;top:0;right:0;bottom:0;z-index:70;width:min(420px, 100%);box-sizing:border-box;display:flex;flex-direction:column;background:var(--lp-paper);border-left:var(--lp-rule-landmark)}\n.lp-nav__scrim[hidden],.lp-nav__drawer[hidden]{display:none}\n.lp-nav__drawer-head{display:flex;align-items:center;justify-content:space-between;gap:10px;min-height:40px;padding:10px 15px;border-bottom:var(--lp-rule-landmark)}\n.lp-nav__drawer-title{font-family:var(--lp-display);font-size:16px;font-weight:800;letter-spacing:-0.01em;text-transform:uppercase}\n.lp-nav__close{height:36px;box-sizing:border-box}\n.lp-nav__drawer-body{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;display:flex;flex-direction:column;gap:30px;padding:15px 15px 30px}\n.lp-nav__block{display:flex;flex-direction:column;gap:10px}\n.lp-nav__block-head{display:flex;align-items:center;gap:10px;margin:0;font-family:var(--lp-mono);font-size:10px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--lp-ink)}\n.lp-nav__block-count{color:var(--lp-muted)}\n.lp-nav__search{width:100%}\n.lp-nav__empty{margin:0;font-family:var(--lp-mono);font-size:10px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:var(--lp-muted)}\n.lp-nav__empty[hidden]{display:none}\n.lp-nav__drawer-apps{display:flex;flex-direction:column;gap:15px}\n.lp-nav__group{border:var(--lp-rule-landmark);background:var(--lp-surface)}\n.lp-nav__group[hidden]{display:none}\n.lp-nav__group-head{padding:8px 12px;background:var(--lp-paper);border-bottom:var(--lp-rule-landmark)}\n.lp-nav__drawer .lp-nav__app{grid-template-columns:20px minmax(0, 1fr) auto;padding:8px 12px 8px 8px}\n.lp-nav__drawer .lp-nav__icon{width:20px;height:20px}\n.lp-nav__actions{display:flex;flex-wrap:wrap;gap:10px}\n.lp-nav__action{height:36px;box-sizing:border-box}\n.lp-nav__links{margin:0;padding:0;list-style:none;border:var(--lp-rule-landmark);background:var(--lp-surface)}\n.lp-nav__links > li + li{border-top:var(--lp-rule-telemetry)}\n.lp-nav__links a{display:flex;align-items:center;gap:10px;padding:10px 12px;font-family:var(--lp-mono);font-size:11px;font-weight:700;letter-spacing:0.05em;text-transform:uppercase;color:var(--lp-ink);text-decoration:none}\n.lp-nav__links a:hover{color:var(--lp-ink);background:var(--lp-ochre)}\n.lp-nav__links a:focus-visible{outline:2px solid var(--lp-turkoois);outline-offset:-2px}\n@media (max-width: 640px){.lp-nav .lp-nav__playbooks{display:none !important}.lp-nav__tools{gap:8px}.lp-nav__burger{width:40px;padding:0;justify-content:center}.lp-nav__burger-label{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);white-space:nowrap}}\n@media (max-width: 420px){.lp-nav .lp-header__hub{display:none}.lp-nav .lp-header__title{font-size:14px}}\n@media (pointer: coarse){.lp-nav__trigger,.lp-nav__burger{min-height:44px}.lp-nav__burger{min-width:44px}}\n.lp-nav__floorplan{height:36px;box-sizing:border-box}\n@media (max-width: 640px){.lp-nav .lp-nav__floorplan{display:none !important}}\n[hidden]{display:none!important}\n@media print{.lp-root{display:none}}\na.lp-header__btn{text-decoration:none}\n.lp-header,.lp-topbar{position:relative;top:auto}\n.lp-nav__app[aria-current=\"page\"]{background:var(--lp-ochre);box-shadow:inset 4px 0 0 var(--lp-turkoois)}\n@keyframes lp-arrive { from { transform: translateX(34px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }\n@keyframes dk-march { to { stroke-dashoffset: -240; } }\n@keyframes dk-breathe { 0%,100% { transform: scale(.86); opacity:.35 } 50% { transform: scale(1.06); opacity:1 } }\n@keyframes dk-drift { 0% { transform: translateX(-40px) } 100% { transform: translateX(40px) } }\n@keyframes dk-wave { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-7px) } }\n@keyframes dk-blink { 0%,49% { opacity:1 } 50%,100% { opacity:0 } }\n@keyframes dk-tick { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-5px) } }\n@keyframes lp-arrive { from { opacity:0; transform: translateY(10px) } to { opacity:1; transform:none } }";
  const GROUPS = [{"num":"01","label":"Check the human","short":"Human","apps":[{"href":"https://cognitive-tetris.vercel.app/","external":false,"title":"Cognitive Tetris","desc":"Non-chronological 24-hour capacity engine and 10x10 spoon vessel.","haystack":"cognitive tetris 24-hour canvas monotropic task architecture spoons energy personal active tetris \u00b7 pk-tetris cognitive tetris non-chronological 24-hour capacity engine and 10x10 spoon vessel. audhd personal","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><g fill=\"var(--nd-ink,#16130F)\"><rect x=\"4\" y=\"4\" width=\"10\" height=\"10\"></rect><rect x=\"18\" y=\"4\" width=\"10\" height=\"10\"></rect><rect x=\"11\" y=\"18\" width=\"10\" height=\"10\"></rect></g></svg>"},{"href":"https://spoon-ledger.vercel.app/","external":false,"title":"Spoon & Protocol Ledger","desc":"Daily energy capacity and medication protocol check-ins.","haystack":"spoon protocol ledger daily energy capacity medication check-ins personal spoon & protocol spoon & protocol ledger daily energy capacity and medication protocol check-ins. personal","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><g fill=\"var(--nd-ink,#16130F)\"><polygon points=\"11,3 21,3 26,8 26,14 18,20 18,29 14,29 14,20 6,14 6,8\"></polygon></g></svg>"},{"href":"https://witness-ledger-rose.vercel.app/","external":false,"title":"The Witness Ledger","desc":"Objective affective logging and 90-second somatic court recorder.","haystack":"witness court recorder affective logging somatic telemetry ders ffmq personal audhd active witness \u00b7 pk-wit-001 the witness ledger objective affective logging and 90-second somatic court recorder. audhd personal","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><g fill=\"none\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"><rect x=\"4\" y=\"4\" width=\"24\" height=\"24\"></rect><circle cx=\"16\" cy=\"16\" r=\"5\" fill=\"var(--nd-blou,#1B4C9E)\"></circle></g></svg>"},{"href":"https://nda-launchpad.vercel.app/daily-productivity-rules/","external":false,"title":"Daily Productivity Rules","desc":"Five AuDHD rules for low-friction daily execution and zero-compliance tracking.","haystack":"rules daily productivity rules audhd low-friction execution zero-compliance tracking standalone active rules daily productivity rules five audhd rules for low-friction daily execution and zero-compliance tracking. audhd standalone","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><g fill=\"var(--nd-ink,#16130F)\"><rect x=\"4\" y=\"4\" width=\"24\" height=\"4\"></rect><rect x=\"4\" y=\"12\" width=\"16\" height=\"4\"></rect><rect x=\"4\" y=\"20\" width=\"20\" height=\"4\"></rect><rect x=\"4\" y=\"28\" width=\"12\" height=\"4\"></rect></g></svg>"}]},{"num":"02","label":"What matters today","short":"Today","apps":[{"href":"https://nd-agency-hud.vercel.app/","external":false,"title":"Task HUD","desc":"Read today's top action card, nothing else.","haystack":"hud task hud top action card nd agency today hud task hud read today's top action card, nothing else. nd agency","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><g fill=\"var(--nd-ink,#16130F)\"><rect x=\"3\" y=\"4\" width=\"5\" height=\"24\"></rect><rect x=\"13\" y=\"4\" width=\"5\" height=\"24\"></rect><polygon points=\"3,28 8,28 18,4 13,4\"></polygon><rect x=\"13\" y=\"4\" width=\"17\" height=\"5\"></rect><rect x=\"13\" y=\"23\" width=\"17\" height=\"5\"></rect><rect x=\"25\" y=\"4\" width=\"5\" height=\"24\"></rect></g></svg>"},{"href":"https://goal-rings.vercel.app/","external":false,"title":"Goal Rings","desc":"Map the layered commitments when it all knots up.","haystack":"rings goal rings map layered commitments knots personal rings goal rings map the layered commitments when it all knots up. personal","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><rect x=\"3\" y=\"3\" width=\"26\" height=\"26\" fill=\"none\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"></rect><rect x=\"9\" y=\"9\" width=\"14\" height=\"14\" fill=\"none\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"></rect><rect x=\"14\" y=\"14\" width=\"4\" height=\"4\" fill=\"var(--nd-ink,#16130F)\"></rect></svg>"},{"href":"https://then-now.vercel.app/","external":false,"title":"then \u00b7 now","desc":"Two sides, one centre. Decision mapping when something lands.","haystack":"then now then-now rings decision mapping concentric padkleur personal active today then \u00b7 now then \u00b7 now two sides, one centre. decision mapping when something lands. personal audhd","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 64 64\" aria-hidden=\"true\" focusable=\"false\"><rect x=\"0\" y=\"0\" width=\"64\" height=\"64\" fill=\"#EFECE3\"></rect><g><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"none\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"></rect><line x1=\"32\" y1=\"6\" x2=\"32\" y2=\"58\" stroke=\"#DDD9C3\" stroke-width=\"1.5\" stroke-dasharray=\"2,2\"></line><rect x=\"10\" y=\"19\" width=\"18\" height=\"2\" fill=\"var(--nd-ink-muted,#16130Fa6)\"></rect><rect x=\"8\" y=\"13\" width=\"18\" height=\"6\" fill=\"var(--nd-ink,#16130F)\"></rect><rect x=\"19\" y=\"19\" width=\"2\" height=\"30\" fill=\"var(--nd-ink-muted,#16130Fa6)\"></rect><rect x=\"14\" y=\"19\" width=\"6\" height=\"30\" fill=\"var(--nd-ink,#16130F)\"></rect><rect x=\"30\" y=\"31\" width=\"6\" height=\"6\" fill=\"var(--nd-ink-muted,#16130Fa6)\"></rect><rect x=\"29\" y=\"29\" width=\"6\" height=\"6\" fill=\"var(--nd-ink,#16130F)\"></rect><rect x=\"38\" y=\"13\" width=\"6\" height=\"36\" fill=\"var(--nd-ink,#16130F)\"></rect><rect x=\"50\" y=\"13\" width=\"6\" height=\"36\" fill=\"var(--nd-ink,#16130F)\"></rect><polygon points=\"38,13 44,13 56,49 50,49\" fill=\"var(--nd-groen,#1C7A4E)\"></polygon><line x1=\"44\" y1=\"13\" x2=\"56\" y2=\"49\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"1.5\"></line><line x1=\"38\" y1=\"13\" x2=\"50\" y2=\"49\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"1.5\"></line><line x1=\"8\" y1=\"53\" x2=\"56\" y2=\"53\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"1.5\"></line></g></svg>"},{"href":"https://nda-focus-terminal.vercel.app/","external":false,"title":"Focus Terminal","desc":"Phone-first focus screen for the task in hand.","haystack":"focus terminal phone mobile task in hand personal nd agency focus focus terminal phone-first focus screen for the task in hand. personal nd agency","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><g fill=\"none\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"><rect x=\"9\" y=\"3\" width=\"14\" height=\"26\"></rect></g><rect x=\"13\" y=\"13\" width=\"6\" height=\"6\" fill=\"var(--nd-ink,#16130F)\"></rect></svg>"},{"href":"https://task-reservoir.vercel.app/","external":false,"title":"Task Reservoir","desc":"Holds the tasks that aren't today's, so Task HUD stays clean.","haystack":"task reservoir backlog later holding tank personal nd agency reservoir task reservoir holds the tasks that aren't today's, so task hud stays clean. personal nd agency","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><g fill=\"none\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"><polyline points=\"4,6 4,28 28,28 28,6\"></polyline></g><rect x=\"6\" y=\"18\" width=\"20\" height=\"8\" fill=\"var(--nd-ink,#16130F)\"></rect></svg>"},{"href":"https://derrida-rings.vercel.app/","external":false,"title":"Derrida Rings","desc":"Dump the thought, then take it apart on a canvas.","haystack":"derrida rings deconstructive canvas dump thought take apart personal audhd derrida derrida rings dump the thought, then take it apart on a canvas. personal audhd","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><g fill=\"none\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"><rect x=\"3\" y=\"3\" width=\"26\" height=\"26\"></rect><line x1=\"3\" y1=\"3\" x2=\"29\" y2=\"29\"></line><line x1=\"29\" y1=\"3\" x2=\"3\" y2=\"29\"></line></g></svg>"},{"href":"https://chat-rings.vercel.app/","external":false,"title":"Chat Rings","desc":"A simulated three-way chat to talk a decision round.","haystack":"chat rings simulated three-way chat tri-directional decision talk personal chat rings chat rings a simulated three-way chat to talk a decision round. personal","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><g fill=\"var(--nd-ink,#16130F)\"><rect x=\"4\" y=\"4\" width=\"10\" height=\"8\"></rect><rect x=\"18\" y=\"12\" width=\"10\" height=\"8\"></rect><rect x=\"4\" y=\"20\" width=\"10\" height=\"8\"></rect></g></svg>"}]},{"num":"03","label":"Money in the door","short":"Money","apps":[{"href":"https://income-pipeline-eta.vercel.app/","external":false,"title":"Income Pipeline","desc":"CRM lite \u00b7 track milestones, Wise/Upwork cuts & cash runway.","haystack":"income pipeline crm lite cash runway money wise upwork milestones nd agency pipeline \u00b7 pk-runway income pipeline crm lite \u00b7 track milestones, wise/upwork cuts & cash runway. nd agency","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 64 64\" aria-hidden=\"true\" focusable=\"false\"><rect x=\"0\" y=\"0\" width=\"64\" height=\"64\" fill=\"#EFECE3\"></rect><g><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"none\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"></rect><line x1=\"6\" y1=\"48\" x2=\"58\" y2=\"48\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"1.5\"></line><rect x=\"10\" y=\"14\" width=\"14\" height=\"34\" fill=\"var(--nd-ink-muted,#16130Fa6)\"></rect><rect x=\"8\" y=\"12\" width=\"14\" height=\"34\" fill=\"#FFFFFF\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"></rect><rect x=\"11\" y=\"17\" width=\"8\" height=\"4\" fill=\"var(--lp-kalk,#DDD9C3)\"></rect><rect x=\"11\" y=\"25\" width=\"8\" height=\"4\" fill=\"var(--lp-kalk,#DDD9C3)\"></rect><rect x=\"11\" y=\"33\" width=\"8\" height=\"4\" fill=\"var(--lp-kalk,#DDD9C3)\"></rect><polygon points=\"22,26 31,17 31,23 22,32\" fill=\"var(--nd-ink,#16130F)\"></polygon><polygon points=\"31,27 36,22 41,27 36,32\" fill=\"var(--lp-geel,#E7B21B)\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"1.5\"></polygon><rect x=\"35\" y=\"12\" width=\"21\" height=\"8\" fill=\"var(--nd-ink,#16130F)\"></rect><rect x=\"33\" y=\"10\" width=\"21\" height=\"8\" fill=\"var(--lp-groen,#1C7A4E)\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"></rect><rect x=\"36\" y=\"13\" width=\"3\" height=\"2\" fill=\"#EFECE3\"></rect><rect x=\"35\" y=\"24\" width=\"21\" height=\"8\" fill=\"var(--nd-ink,#16130F)\"></rect><rect x=\"33\" y=\"22\" width=\"21\" height=\"8\" fill=\"var(--lp-oranje,#DC6919)\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"></rect><rect x=\"36\" y=\"25\" width=\"3\" height=\"2\" fill=\"#EFECE3\"></rect><rect x=\"35\" y=\"36\" width=\"21\" height=\"8\" fill=\"var(--nd-ink,#16130F)\"></rect><rect x=\"33\" y=\"34\" width=\"21\" height=\"8\" fill=\"#FFFFFF\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"></rect><rect x=\"38\" y=\"37\" width=\"11\" height=\"2\" fill=\"var(--nd-ink-muted,#16130Fa6)\"></rect></g></svg>"},{"href":"https://upwork-engine-pi.vercel.app/","external":false,"title":"Upwork Engine","desc":"Draft the proposal without the blank page.","haystack":"upwork engine draft proposal blank page nd agency upwork upwork engine draft the proposal without the blank page. nd agency","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><polygon points=\"8,8 24,8 18,16 18,24 14,24 14,16\" fill=\"var(--nd-ink,#16130F)\"></polygon></svg>"},{"href":"https://ndagency.digital/","external":true,"title":"ND Agency Website","desc":"Check the front door still says the right thing.","haystack":"site nd agency website front door public marketing site nd agency website check the front door still says the right thing. nd agency public","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><rect x=\"3\" y=\"6\" width=\"26\" height=\"20\" fill=\"none\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"></rect><rect x=\"3\" y=\"6\" width=\"26\" height=\"5\" fill=\"var(--nd-ink,#16130F)\"></rect><rect x=\"7\" y=\"15\" width=\"12\" height=\"2.5\" fill=\"var(--nd-ink,#16130F)\"></rect><rect x=\"7\" y=\"20\" width=\"18\" height=\"2.5\" fill=\"var(--nd-ink,#16130F)\"></rect></svg>"},{"href":"https://marketing-app-swart-zeta.vercel.app/","external":false,"title":"Marketing App","desc":"Review and approve marketing assets on a clean background.","haystack":"marketing approval dashboard asset review images nd agency local marketing \u00b7 pk-market marketing app review and approve marketing assets on a clean background. nd agency","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><rect x=\"4\" y=\"6\" width=\"24\" height=\"20\" fill=\"none\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"></rect><circle cx=\"10\" cy=\"12\" r=\"2\" fill=\"var(--nd-ink,#16130F)\"></circle><polygon points=\"4,26 12,16 20,24 22,20 28,26\" fill=\"var(--nd-ink,#16130F)\"></polygon></svg>"}]},{"num":"04","label":"Build the courses","short":"Courses","apps":[{"href":"https://scaffolded-app.vercel.app/","external":false,"title":"Scaffolded","desc":"Walk the lesson the way a student will.","haystack":"school scaffolded walk the lesson student nd agency scaffolded \u00b7 pk-scaffold scaffolded walk the lesson the way a student will. nd agency","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><g fill=\"var(--nd-ink,#16130F)\"><rect x=\"4\" y=\"3\" width=\"24\" height=\"5\"></rect><rect x=\"4\" y=\"3\" width=\"5\" height=\"15\"></rect><rect x=\"4\" y=\"13\" width=\"24\" height=\"5\"></rect><rect x=\"23\" y=\"14\" width=\"5\" height=\"15\"></rect><rect x=\"4\" y=\"24\" width=\"24\" height=\"5\"></rect></g></svg>"},{"href":"https://build-board-app.vercel.app/","external":false,"title":"Build Board","desc":"Move the lesson pipeline one stage on.","haystack":"board build board lesson pipeline stage nd agency board build board move the lesson pipeline one stage on. nd agency","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><g fill=\"var(--nd-ink,#16130F)\"><rect x=\"4\" y=\"4\" width=\"7\" height=\"24\"></rect><rect x=\"13\" y=\"4\" width=\"7\" height=\"18\"></rect><rect x=\"22\" y=\"4\" width=\"7\" height=\"12\"></rect></g></svg>"},{"href":"https://ask-persona-chi.vercel.app/","external":false,"title":"Ask Persona","desc":"Put the copy to an avatar before a human sees it.","haystack":"persona ask persona copy avatar human nd agency public never opened persona ask persona put the copy to an avatar before a human sees it. nd agency public","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><rect x=\"4\" y=\"4\" width=\"24\" height=\"24\" fill=\"none\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"></rect><rect x=\"10\" y=\"11\" width=\"4\" height=\"4\" fill=\"var(--nd-ink,#16130F)\"></rect><rect x=\"18\" y=\"11\" width=\"4\" height=\"4\" fill=\"var(--nd-ink,#16130F)\"></rect><rect x=\"10\" y=\"20\" width=\"12\" height=\"3\" fill=\"var(--nd-ink,#16130F)\"></rect></svg>"},{"href":"https://applied-ai-course-viewer.vercel.app/","external":false,"title":"Applied AI Course Viewer","desc":"Review all 8 modules plus the midterm and final, as a student sees them.","haystack":"applied ai course viewer review portal excel education lot 2 modules midterm final student nd agency public ai course applied ai course viewer review all 8 modules plus the midterm and final, as a student sees them. nd agency public","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><g fill=\"none\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"><rect x=\"3\" y=\"5\" width=\"26\" height=\"18\"></rect><line x1=\"10\" y1=\"28\" x2=\"22\" y2=\"28\"></line></g><polygon points=\"13,9 21,14 13,19\" fill=\"var(--nd-ink,#16130F)\"></polygon></svg>"}]},{"num":"05","label":"Keep the house standing","short":"House","apps":[{"href":"https://bellevliet-pantry.vercel.app/","external":false,"title":"Bellevliet Pantry","desc":"Stock check before the shop, not after.","haystack":"pantry bellevliet pantry stock check shop personal local only pantry bellevliet pantry stock check before the shop, not after. personal local only","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><g fill=\"var(--nd-ink,#16130F)\"><rect x=\"4\" y=\"4\" width=\"4\" height=\"24\"></rect><rect x=\"24\" y=\"4\" width=\"4\" height=\"24\"></rect><rect x=\"4\" y=\"4\" width=\"24\" height=\"4\"></rect><rect x=\"4\" y=\"14\" width=\"24\" height=\"4\"></rect><rect x=\"4\" y=\"24\" width=\"24\" height=\"4\"></rect></g></svg>"},{"href":"https://randlord.vercel.app/","external":false,"title":"The Randlord","desc":"Runway, burn rate, and the honest number.","haystack":"rand the randlord runway burn rate honest number personal demo data money finance rand the randlord runway, burn rate, and the honest number. personal demo data","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 64 64\" aria-hidden=\"true\" focusable=\"false\"><rect x=\"0\" y=\"0\" width=\"64\" height=\"64\" fill=\"#EFECE3\"></rect><rect x=\"2\" y=\"2\" width=\"60\" height=\"60\" fill=\"none\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"></rect><g transform=\"rotate(-6 32 20)\"><rect x=\"21\" y=\"6\" width=\"22\" height=\"17\" fill=\"var(--nd-ink,#16130F)\"></rect><rect x=\"21\" y=\"19\" width=\"22\" height=\"4\" fill=\"var(--lp-geel,#E7B21B)\"></rect><rect x=\"13\" y=\"23\" width=\"38\" height=\"3.5\" fill=\"var(--nd-ink,#16130F)\"></rect></g><rect x=\"18\" y=\"32\" width=\"10\" height=\"3\" fill=\"var(--nd-ink,#16130F)\"></rect><rect x=\"20\" y=\"37\" width=\"5\" height=\"3\" fill=\"var(--nd-ink,#16130F)\"></rect><rect x=\"33\" y=\"30\" width=\"14\" height=\"14\" fill=\"var(--lp-geel,#E7B21B)\"></rect><rect x=\"35.5\" y=\"32.5\" width=\"9\" height=\"9\" fill=\"#EFECE3\"></rect><polygon points=\"40,32.5 43,32.5 37.5,41.5 35.5,41.5\" fill=\"#59CBE8\"></polygon><rect x=\"47\" y=\"35\" width=\"2\" height=\"4\" fill=\"var(--lp-geel,#E7B21B)\"></rect><path d=\"M49,38 L54,38 L54,47 L52,47 L52,56\" fill=\"none\" stroke=\"var(--lp-geel,#E7B21B)\" stroke-width=\"1.5\"></path><rect x=\"50.5\" y=\"55\" width=\"4\" height=\"4\" fill=\"var(--lp-geel,#E7B21B)\"></rect><rect x=\"26\" y=\"44\" width=\"10\" height=\"4\" fill=\"var(--nd-ink,#16130F)\"></rect><polygon points=\"26,44 26,48 17,48 12,43 12,39 16,39 20,44\" fill=\"var(--nd-ink,#16130F)\"></polygon><polygon points=\"36,44 36,48 45,48 50,43 50,39 46,39 42,44\" fill=\"var(--nd-ink,#16130F)\"></polygon><polygon points=\"26,53 36,53 33,56 29,56\" fill=\"var(--lp-kalk,#DDD9C3)\"></polygon><polygon points=\"25,55 37,55 35,59 27,59\" fill=\"var(--nd-ink,#16130F)\"></polygon><rect x=\"29.5\" y=\"55\" width=\"3\" height=\"3\" fill=\"var(--lp-geel,#E7B21B)\"></rect></svg>"},{"href":"https://packing-app-five.vercel.app/","external":false,"title":"Packing App","desc":"Pack list before the trip, not at the door.","haystack":"pack packing app trip list luggage personal pack packing app pack list before the trip, not at the door. personal","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><g fill=\"none\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"><rect x=\"4\" y=\"10\" width=\"24\" height=\"18\"></rect><rect x=\"11\" y=\"4\" width=\"10\" height=\"6\"></rect><line x1=\"4\" y1=\"18\" x2=\"28\" y2=\"18\"></line></g></svg>"}]},{"num":"06","label":"Resources & Guides","short":"Guides","apps":[{"href":"https://nda-launchpad.vercel.app/footer-blocks/pipeline-atlas.html","external":false,"title":"Pipeline Atlas","desc":"Co-Design Pipeline: Operational Field Manual.","haystack":"pipeline atlas co-design field manual resources guides nd agency atlas pipeline atlas co-design pipeline: operational field manual. nd agency standalone","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><g fill=\"none\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"><rect x=\"4\" y=\"4\" width=\"24\" height=\"24\"></rect><line x1=\"4\" y1=\"12\" x2=\"28\" y2=\"12\"></line><line x1=\"12\" y1=\"12\" x2=\"12\" y2=\"28\"></line></g></svg>"},{"href":"https://padkleur-instructional-design.vercel.app/","external":false,"title":"Instructional Design Hub","desc":"The three published course-design playbooks: learning containers, US school accreditation, online course rules.","haystack":"id hub instructional design playbooks pedagogic container accreditation online course rules resources guides nd agency public id hub instructional design hub the three published course-design playbooks: learning containers, us school accreditation, online course rules. nd agency public","icon":"<svg class=\"lp-nav__icon\" viewBox=\"0 0 32 32\" aria-hidden=\"true\" focusable=\"false\"><g fill=\"none\" stroke=\"var(--nd-ink,#16130F)\" stroke-width=\"2\"><rect x=\"4\" y=\"4\" width=\"11\" height=\"24\"></rect><rect x=\"17\" y=\"4\" width=\"11\" height=\"24\"></rect></g></svg>"}]}];
  const PLAYBOOKS = 90;
  const LOGO = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjEwNC45NyAyMDguMzEgMTU4LjAxIDE3Ni4zMyIgcm9sZT0iaW1nIiBhcmlhLWxhYmVsPSJUaGUgTmV1cm9kaXZlcnNlIEFnZW5jeSBtYXJrIj4KICA8dGl0bGU+VGhlIE5ldXJvZGl2ZXJzZSBBZ2VuY3kgbWFyazwvdGl0bGU+CiAgPGc+CiAgICA8cGF0aCBmaWxsPSIjMUExQTFBIiBkPSJNMTA1LjU0LDM4NC42M2MtLjMyLDAtLjU2LS4yNS0uNTctLjU3LDAtLjM0LjI1LS42MS41OC0uNjNsMTQuMjktLjE4czQuOTQtLjIxLDYuOTEtLjgxYzUuMTctMS40Myw2LjIzLTUuMiw2LjIzLTEwLjQybC4xMS0xNy42OGMuMTQtMzMuOTguNTgtOTMuMDIsMS4wNS0xMjkuMTZsLjA0LTMuNTljLS4yNy0zLjczLjg5LTcuMywzLjE4LTkuNzYsMi4xNC0yLjMsNS4wOC0zLjUyLDguNDktMy41MmwxMDIuNi4wOGM1LjgyLDAsOS43OCwxLjIzLDEyLjExLDMuNzYsMS44NiwyLjAxLDIuNjUsNC44OCwyLjM2LDguNTItLjEyLDcuMjUtLjI5LDE4Ljc1LS41LDMyLjMtLjYyLDQwLjIyLTEuNDgsOTUuMzEtMS45MywxMTYuMiwwLDMuOTItLjgsNy41OC0yLjI0LDEwLjI5LTEuODEsMy4zOS00LjU3LDUuMTgtOCw1LjE4aC04MC44MmMtNC4wNCwwLTcuMTYtMS4xNy05LjI2LTMuNDktMi0yLjItMy4wMS01LjM2LTMuMDEtOS4zOWwtNS4zNS0xMTcuNGMuMDQtMS4zNy4wOS0yLjg4LjUxLTQuMzEsMS4wNy00LjkxLDYuMzQtNy4xNCwxMC41Mi03LjU0LDEuNC0uMjEsMi44Ny0uMjcsNC4yOS0uMzMsMS4wNy0uMDQsMi4wOS0uMDksMy4wNy0uMTlsNDkuODktMy4xNGMuNDEtLjA0Ljg1LS4wNywxLjI4LS4wNyw0LjQsMCw5LjQ1LDIuNCwxMC4xMyw3LjY4LjI4LDcuMTItLjUzLDMxLjAyLTEuMTksNTAuMjMtLjM2LDEwLjUyLS42NywxOS42LS43MywyMy44My0uMDMsNS45OC00LjM4LDEwLjAxLTEwLjgzLDEwLjAxaC0uMzZjLS4xNy0uMDItNDIuODMtNC4zOS00Mi44My00LjM5LS4yOCwwLS41My0uMjQtLjU0LS41Ni0uMDEtLjMzLjIzLS42MS41Ni0uNjNsNDMuMTcsMy44M2MyLjUtLjAzLDQuMzYtLjY4LDYuMzYtMi4yNiwyLTEuNjMsMi40OS00LjE2LDIuNTUtNS45OWwxLjAxLTU3LjQzLjIyLTE0LjM1Yy4wOS0xLjg5LS41LTMuNTQtMS43LTQuOC0xLjM5LTEuNDUtMy41Mi0yLjI5LTUuODQtMi4yOS0uMzksMC0uNzkuMDItMS4xOS4wNy03Ljk0LjYyLTE3LjU3LDEuMjctMjYuODgsMS45LTEwLjU1LjcxLTIxLjQ1LDEuNDUtMzAuMjEsMi4xNi0zLjExLjQtOC4zLDIuMDItNy44Nyw4LjMzLjAyLjM3LDUuODEsMTE2LjI5LDUuODcsMTE3LjQ2LDAsMy41MS43NCw1Ljc2LDIuMzIsNy4wOCwxLjUzLDEuMjgsMy45NiwxLjg2LDcuODcsMS44Ni4zMiwwLDU2LjU0LjA0LDU3LjEuMDRoMTguNGM2LjUzLDAsOS41MS01LjgsOS41MS0xMS4xOGwuMTItNy4xOS4yNS04LjUzYy4wNi00Ljk1LjcxLTQwLjkzLDEuMjktNzIuNjcuNS0yNy42Mi45OC01My43MSwxLjAxLTU2LjU3LS4wOC0xLjc4LS4wOS00Ljc1LS4wOS00Ljc4LDAtMi4xOC0uODgtNC4wMS0yLjU1LTUuMjgtMS44LTEuMzctNC41LTIuMDktNy44My0yLjA5bC0xMDAuMTktLjhjLTQuMjgsMC05LjYsMS43LTEwLjU0LDYuNS0uMzIsMS4zOC0uMzMsMy40My0uMzUsNS4yNCwwLC42Ni0uMDEsMS4yOC0uMDMsMS44Mi0uNCwyMi43Mi0uOSw0OC44Ny0xLjM4LDc0Ljk0LS40NywyNS4xLS45NCw1MC4xNC0xLjMzLDcyLDAsOC4wNS0zLjg4LDEyLjQzLTExLjIyLDEyLjY2di0uMDNjLS4zMS4wMy0uODUuMDMtMS44LjAzaC0xNi4wNnMtLjAyLS40Mi0uMDItLjQydi40M1oiPjwvcGF0aD4KICAgICAgPHBhdGggZmlsbD0iIzFBMUExQSIgZD0iTTE5NC4yNCwyOTMuNTVjLTExLjk2LjI4LTEyLjU2LTE2LjkzLS4zMi0xOC4wNywxMi4yMi0uMTgsMTIuMjMsMTcuMTQuMzIsMTguMDdNMTk0LjIzLDI5My4yYzkuNC0uODMsOS4xOS0xNC41My0uMjUtMTQuMjktOS40My43NS05LjE2LDE0LjQ0LjI1LDE0LjI5Ij48L3BhdGg+CiAgPC9nPgo8L3N2Zz4=";
  const FONTS = [{"family":"Archivo","weight":"400 900","stretch":"62% 125%","file":"k3kQo8UDI-1M0wlSfdnoLg.woff2","range":"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},{"family":"Familjen Grotesk","weight":"400 700","stretch":"","file":"Qw3GZR9ZHiDnImG6-NEMQ41wby8WbHoEjw.woff2","range":"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"},{"family":"Martian Mono","weight":"400 800","stretch":"100%","file":"2V0PKIcADoYhV6w87xrTKjs4CYElh_VS9YA4TlTnaTq9wQ.woff2","range":"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"}];

  const script = document.currentScript
    || document.querySelector('script[src*="launchpad-nav.js"]');
  const base = script ? script.src : location.href;

  // Fonts belong to the document: @font-face inside a shadow root is ignored.
  if (!document.getElementById('launchpad-nav-fonts')) {
    const style = document.createElement('style');
    style.id = 'launchpad-nav-fonts';
    style.textContent = FONTS.map(f =>
      `@font-face{font-family:'${f.family}';font-style:normal;font-weight:${f.weight};` +
      `${f.stretch ? `font-stretch:${f.stretch};` : ''}font-display:swap;` +
      `src:url(${new URL('fonts/' + f.file, base).href}) format('woff2');` +
      `unicode-range:${f.range};}`).join('\n');
    document.head.appendChild(style);
  }

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  function isCurrent(href) {
    const u = new URL(href);
    if (u.origin !== location.origin) return false;
    // Pages inside the hub (Daily productivity rules, the pipeline atlas) share
    // its origin, so they match on path; a whole app matches on origin alone.
    return u.pathname === '/' || location.pathname.indexOf(u.pathname.replace(/\.html$/, '')) === 0;
  }

  function appLink(app, withDesc) {
    const current = isCurrent(app.href);
    // Apps open in this window, so the bar stays put as you move between them.
    // Only a site outside the suite (the hub card marks it target="_blank") opens a new tab.
    const tab = app.external ? ' target="_blank" rel="noopener"' : '';
    return `<a class="lp-nav__app" href="${esc(app.href)}"${tab}${current ? ' aria-current="page"' : ''}>` +
      `${app.icon || '<span class="lp-nav__icon"></span>'}` +
      `<span class="lp-nav__app-body"><span class="lp-nav__app-title">${esc(app.title)}</span>` +
      `${withDesc && app.desc ? `<span class="lp-nav__app-desc">${esc(app.desc)}</span>` : ''}</span></a>`;
  }

  function groupHead(tag, cls, g, countText) {
    return `<${tag} class="${cls}"><span class="lp-rail__num">${esc(g.num)}</span>` +
      `<span class="${cls}-title">${esc(g.label)}</span>` +
      `<span class="${cls}-count">${esc(countText)}</span></${tag}>`;
  }

  const plural = n => n + (n === 1 ? ' app' : ' apps');
  const total = GROUPS.reduce((n, g) => n + g.apps.length, 0);

  const dropdowns = GROUPS.map((g, i) =>
    `<li class="lp-nav__item"><button type="button" class="lp-nav__trigger" title="${esc(g.label)} \u00b7 ${plural(g.apps.length)}" aria-expanded="false" aria-controls="m${i}">` +
    `<span class="lp-nav__trigger-label">${esc(g.short)}</span><span class="lp-nav__caret" aria-hidden="true">\u25be</span></button>` +
    `<div class="lp-nav__menu" id="m${i}" tabindex="-1" hidden>${groupHead('p', 'lp-nav__menu-head', g, plural(g.apps.length))}` +
    `<ul class="lp-nav__list-apps">${g.apps.map(a => `<li>${appLink(a, true)}</li>`).join('')}</ul></div></li>`).join('');

  const drawerGroups = GROUPS.map(g =>
    `<div class="lp-nav__group">${groupHead('p', 'lp-nav__group-head', g, String(g.apps.length))}` +
    `<ul class="lp-nav__list-apps">${g.apps.map(a => `<li data-haystack="${esc(a.haystack)}">${appLink(a, false)}</li>`).join('')}</ul></div>`).join('');

  const TEMPLATE = `<style>${CSS}</style><div class="lp-root">
<header class="lp-header lp-topbar lp-nav" aria-label="Launchpad">
  <div class="lp-header__inner lp-nav__inner">
    <a href="${HUB}" class="lp-header__brand">
      <img class="lp-header__mark" src="${LOGO}" alt="The ND Agency" width="29" height="32">
      <span class="lp-header__title">Launchpad<span class="lp-header__hub">Hub</span></span>
    </a>
    <nav class="lp-nav__apps" aria-label="Apps"><ul class="lp-nav__list">${dropdowns}</ul></nav>
    <div class="lp-nav__tools">
      <a href="${HUB}#floor-plan" class="lp-header__btn lp-nav__floorplan" title="Show the headquarters floor plan">
        <span class="lp-header__btn-icon" aria-hidden="true">&#9638;</span><span class="lp-header__btn-label">Floor plan</span></a>
      <a href="${HUB}#playbooks" class="lp-header__btn lp-nav__playbooks" title="Open Playbooks &amp; Guides">
        <span class="lp-header__btn-icon" aria-hidden="true">&#128214;</span><span class="lp-header__btn-label">Playbooks</span>
        <span class="lp-header__btn-count">${PLAYBOOKS}</span></a>
      <button type="button" class="lp-nav__burger" aria-expanded="false" aria-controls="drawer">
        <span class="lp-nav__burger-icon" aria-hidden="true"><span></span><span></span><span></span></span>
        <span class="lp-nav__burger-label">Menu</span>
      </button>
    </div>
  </div>
</header>
<div class="lp-nav__scrim" hidden></div>
<div id="drawer" class="lp-nav__drawer" role="dialog" aria-modal="true" aria-labelledby="drawer-title" tabindex="-1" hidden>
  <div class="lp-nav__drawer-head">
    <span id="drawer-title" class="lp-nav__drawer-title">Menu</span>
    <button type="button" class="lp-header__btn lp-nav__close">Close <span aria-hidden="true">&times;</span></button>
  </div>
  <div class="lp-nav__drawer-body">
    <div class="lp-nav__block">
      <h2 class="lp-nav__block-head">Apps <span class="lp-rail__rule"></span> <span class="lp-nav__block-count">${total}</span></h2>
      <label for="search" class="lp-nav__vh">Find an app</label>
      <input type="search" id="search" class="lp-header__input lp-nav__search" placeholder="Find an app (Pantry, HUD, Board&hellip;)" autocomplete="off" spellcheck="false">
      <p class="lp-nav__empty" hidden>No app matches that.</p>
      <div class="lp-nav__drawer-apps">${drawerGroups}</div>
    </div>
    <div class="lp-nav__block">
      <h2 class="lp-nav__block-head">Launchpad <span class="lp-rail__rule"></span></h2>
      <div class="lp-nav__actions">
        <a href="${HUB}#floor-plan" class="lp-header__btn lp-nav__action">
          <span class="lp-header__btn-icon" aria-hidden="true">&#9638;</span><span class="lp-header__btn-label">Floor plan</span></a>
        <a href="${HUB}#playbooks" class="lp-header__btn lp-nav__action">
          <span class="lp-header__btn-icon" aria-hidden="true">&#128214;</span><span class="lp-header__btn-label">Playbooks &amp; Guides</span>
          <span class="lp-header__btn-count">${PLAYBOOKS}</span></a>
      </div>
    </div>
    <div class="lp-nav__block">
      <h2 class="lp-nav__block-head">Elsewhere <span class="lp-rail__rule"></span></h2>
      <ul class="lp-nav__links">
        <li><a href="${HUB}">Launchpad hub <span aria-hidden="true">&rarr;</span></a></li>
        <li><a href="${HUB}andrew/">Andrew's launchpad <span aria-hidden="true">&rarr;</span></a></li>
        <li><a href="https://the-nd-agency.com" target="_blank" rel="noopener noreferrer">the-nd-agency.com <span aria-hidden="true">&#8599;</span></a></li>
      </ul>
    </div>
  </div>
</div></div>`;

  const qa = (sel, root) => Array.prototype.slice.call(root.querySelectorAll(sel));

  class LaunchpadNav extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML = TEMPLATE;
      this.setAttribute('role', 'banner');
      // Inline, so no stylesheet of the app's can unpin the bar. Margins stay
      // the app's: one with a padded body can pull the bar to the edges.
      this.style.cssText = 'display:block;position:sticky;top:0;z-index:50;';

      const bar = root.querySelector('.lp-nav');
      const inner = root.querySelector('.lp-nav__inner');
      const brand = root.querySelector('.lp-header__brand');
      const nav = root.querySelector('.lp-nav__apps');
      const tools = root.querySelector('.lp-nav__tools');
      const drawer = root.querySelector('.lp-nav__drawer');
      const scrim = root.querySelector('.lp-nav__scrim');
      const burger = root.querySelector('.lp-nav__burger');
      const closeBtn = root.querySelector('.lp-nav__close');
      const search = root.querySelector('.lp-nav__search');

      // Open menus and the drawer must clear the app's own layers; at rest
      // the bar sits at the hub's z-index 50 so the app's dialogs cover it.
      const raise = on => { this.style.zIndex = on ? '2147483000' : '50'; };

      const menus = this.wireDropdowns(root, nav, raise);
      this.wireDrawer(root, { burger, drawer, scrim, closeBtn, search, menus, raise });
      this.wireSearch(root, search);
      this.wireFit(bar, inner, brand, nav, tools, () => menus.closeAll());

      // Tell the page how tall the bar is, so an app's own bar can sit under it.
      const publish = () => document.documentElement.style.setProperty('--lp-nav-height', this.offsetHeight + 'px');
      if (typeof ResizeObserver === 'function') new ResizeObserver(publish).observe(this);
      publish();
    }

    wireDropdowns(root, nav, raise) {
      const items = qa('.lp-nav__item', root);
      const triggers = items.map(item => item.querySelector('.lp-nav__trigger'));
      const active = () => root.activeElement;
      let open = null;
      const linksOf = item => qa('.lp-nav__menu a', item);

      function close(item, refocus) {
        if (!item) return;
        const btn = item.querySelector('.lp-nav__trigger');
        btn.setAttribute('aria-expanded', 'false');
        item.querySelector('.lp-nav__menu').hidden = true;
        if (open === item) { open = null; raise(false); }
        if (refocus) btn.focus();
      }

      function show(item, focus) {
        if (open && open !== item) close(open, false);
        const menu = item.querySelector('.lp-nav__menu');
        item.querySelector('.lp-nav__trigger').setAttribute('aria-expanded', 'true');
        raise(true);
        menu.hidden = false;
        menu.classList.remove('lp-nav__menu--end');
        if (menu.getBoundingClientRect().right > document.documentElement.clientWidth - 15) {
          menu.classList.add('lp-nav__menu--end');
        }
        open = item;
        const links = linksOf(item);
        if (focus === 'first' && links.length) links[0].focus();
        if (focus === 'last' && links.length) links[links.length - 1].focus();
      }

      items.forEach((item, i) => {
        const btn = triggers[i];
        const menu = item.querySelector('.lp-nav__menu');
        btn.addEventListener('click', () => (open === item ? close(item, false) : show(item)));
        // Once a menu is open, pointing at a neighbour switches to it.
        btn.addEventListener('mouseenter', () => { if (open && open !== item) show(item); });
        btn.addEventListener('keydown', e => {
          const k = e.key;
          if (k === 'ArrowDown') { e.preventDefault(); show(item, 'first'); }
          else if (k === 'ArrowUp') { e.preventDefault(); show(item, 'last'); }
          else if (k === 'ArrowRight' || k === 'ArrowLeft') {
            e.preventDefault();
            const j = (i + (k === 'ArrowRight' ? 1 : triggers.length - 1)) % triggers.length;
            const wasOpen = open !== null;
            if (wasOpen) close(open, false);
            triggers[j].focus();
            if (wasOpen) show(items[j]);
          }
          else if (k === 'Home') { e.preventDefault(); triggers[0].focus(); }
          else if (k === 'End') { e.preventDefault(); triggers[triggers.length - 1].focus(); }
        });
        menu.addEventListener('keydown', e => {
          const links = linksOf(item);
          const at = links.indexOf(active());
          if (e.key === 'ArrowDown') { e.preventDefault(); links[(at + 1) % links.length].focus(); }
          else if (e.key === 'ArrowUp') { e.preventDefault(); links[(at - 1 + links.length) % links.length].focus(); }
          else if (e.key === 'Home') { e.preventDefault(); links[0].focus(); }
          else if (e.key === 'End') { e.preventDefault(); links[links.length - 1].focus(); }
        });
        menu.addEventListener('click', e => { if (e.target.closest('a')) close(item, false); });
      });

      document.addEventListener('click', e => {
        if (open && e.composedPath().indexOf(open) === -1) close(open, false);
      });
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && open) close(open, open.contains(active()));
      });
      nav.addEventListener('focusout', e => { if (open && !nav.contains(e.relatedTarget)) close(open, false); });
      return { closeAll: () => close(open, false) };
    }

    wireDrawer(root, { burger, drawer, scrim, closeBtn, search, menus, raise }) {
      const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';
      const focusables = () => qa(FOCUSABLE, drawer).filter(n => n.offsetParent !== null);
      const html = document.documentElement;
      let saved = null;

      function openDrawer() {
        if (!drawer.hidden) return;
        menus.closeAll();
        raise(true);
        drawer.hidden = false;
        scrim.hidden = false;
        burger.setAttribute('aria-expanded', 'true');
        saved = { overflow: html.style.overflow, gutter: html.style.scrollbarGutter };
        html.style.overflow = 'hidden';
        html.style.scrollbarGutter = 'stable';
        // Keyboards and mice land in the search box; touch lands on Close so
        // the on-screen keyboard doesn't jump up uninvited.
        const fine = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
        (fine ? search : closeBtn).focus();
      }

      function closeDrawer(restoreFocus) {
        if (drawer.hidden) return;
        drawer.hidden = true;
        scrim.hidden = true;
        burger.setAttribute('aria-expanded', 'false');
        if (saved) { html.style.overflow = saved.overflow; html.style.scrollbarGutter = saved.gutter; }
        raise(false);
        if (restoreFocus !== false) burger.focus();
      }

      burger.addEventListener('click', () => (drawer.hidden ? openDrawer() : closeDrawer()));
      closeBtn.addEventListener('click', () => closeDrawer());
      scrim.addEventListener('click', () => closeDrawer());
      drawer.addEventListener('keydown', e => {
        if (e.key === 'Escape') { e.preventDefault(); closeDrawer(); return; }
        if (e.key !== 'Tab') return;
        const f = focusables();
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        const at = root.activeElement;
        if (e.shiftKey && (at === first || at === drawer)) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && at === last) { e.preventDefault(); first.focus(); }
      });
      // Focus that lands outside an open drawer comes back to it.
      document.addEventListener('focusin', e => {
        if (!drawer.hidden && e.composedPath().indexOf(drawer) === -1) drawer.focus();
      });
      drawer.addEventListener('click', e => { if (e.target.closest('a[href]')) closeDrawer(false); });
    }

    wireSearch(root, input) {
      const groups = qa('.lp-nav__drawer .lp-nav__group', root).map(wrap => ({
        wrap,
        count: wrap.querySelector('.lp-nav__group-head-count'),
        items: qa('li[data-haystack]', wrap),
      }));
      const totalEl = root.querySelector('.lp-nav__block-count');
      const emptyEl = root.querySelector('.lp-nav__empty');

      function apply() {
        const needle = input.value.trim().toLowerCase();
        let shown = 0;
        groups.forEach(g => {
          let n = 0;
          g.items.forEach(li => {
            const hit = !needle || li.getAttribute('data-haystack').indexOf(needle) !== -1;
            li.hidden = !hit;
            if (hit) n++;
          });
          g.count.textContent = String(n);
          g.wrap.hidden = n === 0;
          shown += n;
        });
        totalEl.textContent = String(needle ? shown : total);
        emptyEl.hidden = shown !== 0;
      }

      input.addEventListener('input', apply);
      input.addEventListener('search', apply);
      // Enter opens the first match \u2014 the menu doubles as a launcher.
      input.addEventListener('keydown', e => {
        if (e.key !== 'Enter') return;
        const first = groups.map(g => g.items.find(li => !li.hidden)).find(Boolean);
        if (first) { e.preventDefault(); first.querySelector('a').click(); }
      });
      apply();
    }

    // Three fits, widest first: full; snug (tools tighten); compact (the
    // dropdowns step aside and the burger carries the apps alone).
    wireFit(bar, inner, brand, nav, tools, onChange) {
      const need = () => {
        const gap = parseFloat(getComputedStyle(inner).columnGap) || 15;
        return brand.getBoundingClientRect().width + nav.getBoundingClientRect().width
          + tools.getBoundingClientRect().width + gap * 2;
      };
      function fit() {
        const before = bar.classList.contains('lp-nav--compact') ? 'compact'
          : bar.classList.contains('lp-nav--snug') ? 'snug' : 'full';
        bar.classList.remove('lp-nav--compact', 'lp-nav--snug');
        let state = 'full';
        if (need() > inner.clientWidth) {
          bar.classList.add('lp-nav--snug');
          state = 'snug';
          if (need() > inner.clientWidth) {
            bar.classList.remove('lp-nav--snug');
            bar.classList.add('lp-nav--compact');
            state = 'compact';
          }
        }
        if (state !== before) onChange();
      }
      if (typeof ResizeObserver === 'function') new ResizeObserver(fit).observe(inner);
      else window.addEventListener('resize', fit);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(fit);
      fit();
    }
  }

  customElements.define('launchpad-nav', LaunchpadNav);
})();
