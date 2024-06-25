import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Welcome } from './components/Welcome';

export function App() {
	return (
		<div className="flex flex-col min-h-screen bg-dark-navy">
      <Navbar />
      <Welcome />
      <Footer />
		</div>
	);
}
