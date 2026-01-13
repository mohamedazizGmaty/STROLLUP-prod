import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { LandingPage } from "@/pages/LandingPage"
import { OnboardingFlow } from "@/components/OnboardingFlow"
import { Layout } from "@/components/Layout"

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<LandingPage />} />
                </Route>
                <Route path="/onboarding" element={<OnboardingFlow />} />
            </Routes>
        </Router>
    )
}

export default App