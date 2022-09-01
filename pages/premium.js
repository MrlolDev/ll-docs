import Head from 'next/head';
import Script from 'next/script';

export default function Premium() {
  return (
    <div>
      <Head>
        <title>Lolinck API | Premium</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <h1>Premium</h1>
        <p>
          We are going to offer a suscription of 2.99€ per month to people who
          want to use the API in big proyects. The features included in the
          suscription are:
        </p>
        <ul>
          <li>No rate limit</li>
          <li>Unlimited requests per month</li>
          <li>Select if you want to use cache or check in real time</li>
          <li>Future access to the AI in the training process</li>
        </ul>
      </main>
    </div>
  );
}
