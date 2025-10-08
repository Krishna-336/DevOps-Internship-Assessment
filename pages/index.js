export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>🚀 Next.js + Docker + Minikube Deployment</h1>
      <p>App is running in production mode!</p>
    </main>
  );
}
