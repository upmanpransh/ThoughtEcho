import { Auth } from "../components/Auth"
import { Quotes } from "../components/Quotes"
export const Signin = () => {
  return <div className="grid grid-cols-1 lg:grid-cols-2">
    <Auth type="signin" />
    <div className="hidden lg:block">
    <Quotes/>
    </div>
  </div>
}