import { Auth } from "../components/Auth"
import { Quotes } from "../components/Quotes"
export const Signup = () => {
  return <div className="grid grid-cols-1 lg:grid-cols-2">
    <Auth type="signup" />
    <div className="hidden lg:block">
    <Quotes/>
    </div>
  </div>
}