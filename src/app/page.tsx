import { FloatingPetals } from "@/components/FloatingPetals";

export default function Home() {
  return (
    <div className="relative z-10 min-h-screen">
      <FloatingPetals />

      <header className="relative px-6 pb-8 pt-14 text-center sm:pt-20">
        <p className="animate-fade-up mb-4 text-xs font-medium uppercase tracking-[0.35em] text-gold">
          A quarter-century · twenty-five
        </p>
        <h1 className="animate-fade-up-delay-1 font-serif text-[clamp(2.5rem,8vw,4.75rem)] font-semibold leading-[1.05] tracking-tight text-ink">
          Happy Birthday,
          <span className="mt-2 block bg-gradient-to-r from-wine via-rose to-wine bg-clip-text font-medium italic text-transparent animate-shimmer">
            Mahir
          </span>
        </h1>
        <p className="animate-fade-up-delay-2 mx-auto mt-8 max-w-md text-lg leading-relaxed text-rose">
          Twenty-five looks good on you. Here is a tiny place on the web made
          just for you — my boyfriend, and the person I cannot wait to call my
          husband.
        </p>
      </header>

      <div className="relative mx-auto max-w-lg px-6">
        <div
          className="animate-fade-up-delay-3 h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-60"
          aria-hidden
        />
      </div>

      <section className="relative mx-auto max-w-2xl px-6 py-16 sm:py-24">
        <div className="animate-pulse-glow rounded-2xl border border-gold/20 bg-blush/80 p-8 shadow-xl backdrop-blur-sm sm:p-12">
          <h2 className="font-serif text-2xl font-medium text-wine sm:text-3xl">
            For you
          </h2>
          <div className="mt-8 space-y-6 text-base leading-[1.85] text-ink/85">
            <p>
              Iako je ova stranica AI generisana, ja sam ti napisala ovo. S obzirom da je tebi posao sve i da ti je najlakse na ovaj nacin cestitati ti rodendan. 
              Zelim ti sretan 25 rodendan, puno srece i uspjeha, najprije zdravlja. Posto cu ti poruku napisati
              na ovoj stranici, u poruke ces tacno u 00:00 dobiti link za ovu stranicu. Zelim da uvijek ostanes
              ovako nasmijan, pozitivan, da gradis sebe, da stvaras nove uspjehe i naravno da idalje mene volis najvise na svijetu.
              Znam da je naletio period kada te nerviraju na poslu, kad ti se u posao mijesa neko ko nema minute iskustva o zivotu a 
              kamoli o poslu. Znaj da ce sve to proci, da te iza ovih tmurnih oblaka ceka sunce i sreca i bolje stvari. Niko ne zna
              zasto je nesto u ovom trenutku dobro, dok se nama cini da je sve naopako i nesto najgore sto nam se moze dogoditi. U pismu koje
              si dobio sam ti vec o ovome pisala pa se necemo ponavljati. Zelim da ti opet samo kazem da sam uz tebe, da ne idem nikud, 
              da te volim isto kao i prvog dana cak i vise. Vjeruj mi da ces ovo poslije proci i da ces napraviti bolje stvari. Svaku vece kada legnes
              da spavas u svojoj glavi ponavljaj recenicu: "Sutra ce mi se nesto lijepo desiti". Kada ustanes sebi reci: "Danas ce mi se nesto lijepo desiti". 
              Kada dodes kuci poslije svega samo opet sebi reci: "Dobro je sto sam dosao kuci, sve je u redu, dan je bio lijep i nesto mi se lijepo desilo".
              Ne stvaraj sebi stres, nervozu, zbog osoba koje sutra vise nikada neces u zivotu vidjeti. To te samo sputava i ogranicava
              tvoje sposobnosti i mogućnosti. Uvijek si bio pozitivan i bodrio mene da gledam stvari pozitivnije, sada je dosao red
              na mene da te bodrim da ne stvaras sebi stres, da ne stvaras sebi nervozu, da svijet gledas pozitivno i da uvijek u glavi 
              imas da te neko ceka (ja), da te neko voli (ja) i da ce nesto lijepo desiti (ja - hehe). 
            </p>
            <p>
              Ljubavi moja, volim te i uvijek ces mi biti u srcu. Niko nikada nece zauzeti tvoje mjesto u srcu, jer je mjesto u mom srcu zauvijek tvoje.
              Sretan ti rodendan ljubavi i sreco moja. Zivote moj, duso moja i univerzume moj. Nastavi da budes sretan i pozitivan,
              nastavi da se smijes jer je tvoj osmijeh vrijedniji od bilo cega na ovome svijetu. Volim da te gledam nasmijanog, da gledam 
              tvoje sretne lijepe oci i da te gledam kad si zadivljen zivotom, kad si zadivljen nekim uspjehom.
            </p>
            <p className="font-serif text-lg italic text-wine">
              Sreco moja, ovo je tvoj dan i proslavi ga najbolje sto mozes.
              Voli te tvoje pile!
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-6 pb-20 text-center sm:pb-28">
        <p className="font-serif text-xl text-wine sm:text-2xl">
          I love you — today, on your birthday, and every day after.
        </p>
        <p className="mt-10 text-sm font-medium uppercase tracking-[0.25em] text-gold">
          With all my love,
        </p>
        <p className="mt-3 font-serif text-2xl font-medium italic text-ink">
          Nejra
        </p>
      </section>

      <footer className="relative border-t border-gold/15 px-6 py-8 text-center text-xs text-rose/80">
        Made with love · Happy 25th, Mahir
      </footer>
    </div>
  );
}
