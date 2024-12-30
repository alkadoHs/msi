// src/pages/LandingPage.tsx
import React from "react";

const LandingPage: React.FC = () => {
    return (
        <div className="bg-cyan-50 dark:bg-gray-950 h-dvh overflow-y-auto scroll-bar">
            <header className="bg-cyan-600 text-white py-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center">
                        Proposals ya Mradi wa Kusimamia Hesabu za Maduka
                    </h1>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-10">
                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-cyan-800 dark:text-cyan-500">
                        1. Utangulizi
                    </h2>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        <b>Mauzodata</b> ni mfumo wa kidigitali wa kusimamia
                        hesabu maduka ya wafanyabiashara. Nimeunda mfumo wa
                        kisasa wa kusimamia hesabu za maduka, unaotumia
                        teknolojia tekinolojia ya kisasa kusimamia hesabu zote
                        za maduka kwa kutumia simu yako ya mkononi au kompyuta.
                        Mfumo huu ni salama, rahisi kutumia, na umejengwa ili
                        kusaidia wamiliki wa maduka kufuatilia mauzo, gharama,
                        na hesabu za bidhaa kwa ufanisi.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-cyan-800 dark:text-cyan-500">
                        2. Malengo ya Mradi
                    </h2>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        <li>
                            Usimamizi wa Mauzo: Wamiliki wa maduka wataweza
                            kufuatilia mauzo ya bidhaa kwa kila duka.
                        </li>
                        <li>
                            Usimamizi wa Hisa (Stoku): Mfumo utawezesha wamiliki
                            kufuatilia idadi ya bidhaa zilizopo na zile
                            zilizouzwa.
                        </li>
                        <li>
                            Taarifa za Fedha: Ripoti za faida na hasara kwa kila
                            duka na kampuni nzima.
                        </li>
                        <li>
                            Usalama: Mfumo utaweka usalama wa data kwa kutumia
                            teknolojia za kisasa.
                        </li>
                        <li>
                            Urahisi wa Matumizi: Mfumo rahisi kutumia hata kwa
                            watumiaji wasio na ujuzi wa kompyuta.
                        </li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-cyan-800 dark:text-cyan-500">
                        3. Vipengele Muhimu
                    </h2>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        <li>
                            Dashboard ya Maduka: Dashibodi inayoweza kubadilika
                            kwa kila duka.
                        </li>
                        <li>
                            Ripoti za Kila Siku: Mauzo ya kila siku, wiki,
                            mwezi, na mwaka.
                        </li>
                        <li>
                            Usimamizi wa Wafanyakazi: Kusimamia watumishi, ikiwa
                            ni pamoja na kuona mauzo yao.
                        </li>
                        <li>
                            Uwasilishaji wa Risiti: Risiti za malipo na orodha
                            za bidhaa zilizouzwa.
                        </li>
                        <li>
                            Toleo la PDF na Excel: Ripoti zinazoweza kupakuliwa
                            kwa urahisi.
                        </li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-cyan-800 dark:text-cyan-500">
                        4. Faida za Mfumo
                    </h2>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        <li>
                            Kuboresha Ufanisi: Kupunguza muda wa kufuatilia
                            hesabu.
                        </li>
                        <li>
                            Kuwa na Uangalizi Bora: Kufuatilia biashara kwa
                            ufanisi zaidi.
                        </li>
                        <li>
                            Kuongeza Usalama: Data inalindwa kwa usalama wa hali
                            ya juu.
                        </li>
                        <li>
                            Juu ya Teknolojia: Mfumo wa kisasa unaoweza kukua na
                            biashara yako.
                        </li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-cyan-800 dark:text-cyan-500">
                        5. Jinsi Mfumo Unavyofanya Kazi
                    </h2>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        <li>
                            Kuingia kwenye Mfumo: Kupitia kivinjari au app
                            kwenye simu.
                        </li>
                        <li>
                            Kuongeza na Kusimamia Bidhaa: Ufuatiliaji wa bidhaa
                            zilizopo na zinazouzwa.
                        </li>
                        <li>
                            Kuunda na Kufuatilia Mauzo: Orodha za mauzo na
                            ripoti zake.
                        </li>
                        <li>
                            Usimamizi wa Wateja: Kufuatilia malipo na mikopo ya
                            wateja.
                        </li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-cyan-800 dark:text-cyan-500">
                        6. Gharama na Ratiba
                    </h2>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        <strong>Gharama:</strong> 30,000 Tsh kila mwezi, 300,000
                        Tsh kwa mwaka, au 950,000 Tsh kwa malipo ya moja kwa
                        moja.
                        <br />
                        <strong>Ratiba:</strong> Mfumo tayari kwa matumizi.
                        Tembelea{" "}
                        <a
                            href="https://shop.mauzodata.com/register"
                            className="text-cyan-600 underline"
                        >
                            shop.mauzodata.com/register
                        </a>{" "}
                        kufungua akaunti.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-cyan-800 dark:text-cyan-500">
                        7. Utekelezaji wa Mradi
                    </h2>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
                        <li>
                            Wafanyakazi watafundishwa jinsi ya kutumia mfumo.
                        </li>
                        <li>App itatolewa kwa watumiaji kupakua na kutumia.</li>
                        <li>Msaada wa kiufundi utatolewa wakati wowote.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-semibold text-cyan-800 dark:text-cyan-500">
                        8. Hitimisho
                    </h2>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                        Mfumo huu utaleta manufaa makubwa kwa maduka, kuongeza
                        ufanisi, na usalama wa taarifa. Mawasiliano:{" "}
                        <strong>Call/WhatsApp: 0764940382</strong>.
                    </p>
                </section>
            </main>

            <footer className="bg-cyan-600 text-white py-4 text-center">
                <p>&copy; 2024 Alkado Sichone. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
