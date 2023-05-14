import { final } from "./decorators/final.decorator";
import { frozen } from "./decorators/frozen.decorator";

@final
@frozen
class FinalClass {}

class SubFinalClass extends FinalClass {}
// This will throw an Error : new Error("Cannot inherit from final class");
const sub = new SubFinalClass();
