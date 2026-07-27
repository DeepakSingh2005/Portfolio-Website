import { useEffect, useRef, useState } from "react";
import {Blur} from "../animation/Animation.jsx";
const EMAIL = "deepaksingh000987@gmail.com";
const GITHUB_URL = "https://github.com/DeepakSingh2005";
const LINKEDIN_URL = "https://linkedin.com/in/deepak-singh-5718a3385";
const LOCATION = "Ghaziabad, India";

function JsonLine({ keyName, value, isLast = false }) {
  return (
    <div>
      <span className="text-sky-400">  "{keyName}"</span>
      <span className="text-slate-500">:</span>{" "}
      {value ? (
        <span className="text-amber-300">"{value}"</span>
      ) : (
        <span className="italic text-slate-500">null</span>
      )}
      {!isLast && <span className="text-slate-500">,</span>}
    </div>
  );
}
function Contact( ) {
  const [result, setresult] = useState("");
 
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "project",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const update = (key) => (event) =>
    setForm((current) => ({ ...current, [key]: event.target.value }));

  const handleSubmit = async(event) => {
    event.preventDefault();

    if (!form.name || !form.email || !form.message) {
      event.target.reportValidity?.();
      return;
    }

    setStatus("sending");
    const formData=new FormData(event.target)
    formData.append("access_key","c571e565-6be5-484e-8886-b0320d33dd4f");

const response =await fetch("https://api.web3forms.com/submit",{
  method:"post",
  body:formData,

})
const data=await response.json()
if(data.success){
  setresult("Form submitted succesfully")
  event.target.reset();

}else{
  setresult("error")
}
    const subject = encodeURIComponent(
      `[Portfolio] ${form.type} — from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nType: ${form.type}\n\n${form.message}`
    );

    timeoutRef.current = setTimeout(() => {
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      setStatus("done");
      timeoutRef.current = setTimeout(() => setStatus("idle"), 3200);
    }, 650);
  };

  return (
    
    <div className="min-h-screen px-4 py-10 bg-black sm:px-6 lg:px-8">
      <Blur>
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex items-center gap-3 text-xs font-medium text-slate-400">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full border border-red-400/70 bg-red-400/20" />
            <span className="h-3 w-3 rounded-full border border-amber-400/70 bg-amber-400/20" />
            <span className="h-3 w-3 rounded-full border border-emerald-400/70 bg-emerald-400/20" />
          </div>
          <span>
            ~/portfolio/<span className="text-sky-400">contact</span>
          </span>
        </div>

        <header className="space-y-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1 text-xs font-medium text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
            api/v1 · reachable
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="text-sky-400">POST</span>{" "}
            <span className="text-slate-500">/</span>
            <span className="text-amber-300">contact</span>
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Working on something interesting, hiring, or just want to talk shop?
            Fill in the request body and send it. I read every message myself.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              <span>response · headers</span>
              <span className="text-emerald-300">200 OK</span>
            </div>
            <div className="space-y-1 p-5">
              <div className="flex flex-wrap items-baseline gap-3 border-b border-white/5 py-3 text-sm">
                <span className="w-24 font-mono text-slate-400">email</span>
                <a className="break-all text-sky-400 transition hover:text-sky-300" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </div>
              <div className="flex flex-wrap items-baseline gap-3 border-b border-white/5 py-3 text-sm">
                <span className="w-24 font-mono text-slate-400">github</span>
                <a
                  className="break-all text-sky-400 transition hover:text-sky-300"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {GITHUB_URL.replace("https://", "")}
                </a>
              </div>
              <div className="flex flex-wrap items-baseline gap-3 border-b border-white/5 py-3 text-sm">
                <span className="w-24 font-mono text-slate-400">linkedin</span>
                <a
                  className="break-all text-sky-400 transition hover:text-sky-300"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {LINKEDIN_URL.replace("https://", "")}
                </a>
              </div>
              <div className="flex flex-wrap items-baseline gap-3 border-b border-white/5 py-3 text-sm">
                <span className="w-24 font-mono text-slate-400">location</span>
                <span className="text-slate-100">{LOCATION}</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-3 border-b border-white/5 py-3 text-sm">
                <span className="w-24 font-mono text-slate-400">timezone</span>
                <span className="text-slate-100">IST (UTC+5:30)</span>
              </div>
              <div className="flex flex-wrap items-baseline gap-3 py-3 text-sm">
                <span className="w-24 font-mono text-slate-400">status</span>
                <span className="text-emerald-300">available for work</span>
              </div>

              <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-300">
                Accepting freelance projects &amp; full-time roles
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              <span>request · body</span>
              <span>application/json</span>
            </div>
            <div className="p-5 sm:p-6">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 flex items-baseline gap-2 text-sm font-medium text-slate-300">
                    <span>name</span>
                    <span className="text-rose-400">*</span>
                    <span className="text-slate-500">string</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ada Lovelace"
                    value={form.name}
                    onChange={update("name")}
                    required
                    className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 flex items-baseline gap-2 text-sm font-medium text-slate-300">
                    <span>email</span>
                    <span className="text-rose-400">*</span>
                    <span className="text-slate-500">string</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="ada@example.com"
                    value={form.email}
                    onChange={update("email")}
                    required
                    className="w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="mb-2 flex items-baseline gap-2 text-sm font-medium text-slate-300">
                    <span>type</span>
                    <span className="text-slate-500">enum</span>
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={update("type")}
                    className="w-full appearance-none rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  >
                    <option value="project">new project</option>
                    <option value="job">job opportunity</option>
                    <option value="collab">collaboration</option>
                    <option value="other">other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 flex items-baseline gap-2 text-sm font-medium text-slate-300">
                    <span>message</span>
                    <span className="text-rose-400">*</span>
                    <span className="text-slate-500">string</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="What are you building?"
                    value={form.message}
                    onChange={update("message")}
                    required
                    className="min-h-32 w-full resize-y rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-mono text-sm font-semibold transition ${
                    status === "sending"
                      ? "cursor-progress bg-slate-500 text-slate-950"
                      : status === "done"
                        ? "bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                        : "bg-sky-400 text-slate-950 hover:-translate-y-0.5 hover:bg-sky-300"
                  }`}
                >
                  {status === "sending"
                    ? "sending..."
                    : status === "done"
                      ? "200 OK — sent ✓"
                      : "send request →"}
                </button>
              </form>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/80 p-4 font-mono text-xs leading-7 text-slate-400">
                <div className="text-slate-500">{`{`}</div>
                <JsonLine keyName="name" value={form.name} />
                <JsonLine keyName="email" value={form.email} />
                <JsonLine keyName="type" value={form.type} />
                <JsonLine keyName="message" value={form.message} isLast />
                <div className="text-slate-500">{`}`}</div>
                <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-sky-400" />
              </div>

              {status === "done" && (
                <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300">
                  HTTP/1.1 200 OK — your mail client should now be open
                </div>
              )}
            </div>
          </section>
        </div>

       
      </div></Blur>
    </div>
  );
}

export default Contact;