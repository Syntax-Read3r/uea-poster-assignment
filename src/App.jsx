import Lottie from "lottie-react";
import animationData from "./assets/animation JSON/searching-alone.json";
// import { useRef } from "react";

function App() {
	// const phoneRef = useRef<LottieRefCurrentProps>(null);
	return (
		<>
			<h1>Create Lovely Animation with Munya</h1>

			<Lottie
				// onComplete={() => {
				// 	console.log("complete");
				// 	phoneRef.current?.setDirection(-1);
				// 	phoneRef.current?.play();
				// }}
				// lottieRef={phoneRef}
				// loop={false}
				animationData={animationData}
			/>
		</>
	);
}

export default App;
