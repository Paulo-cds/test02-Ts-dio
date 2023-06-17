import { useState } from "react";
import { login } from "./login";

describe("login", () => {
  it("Deve exibir um alert com boas vindas", () => {
    const user: string = "Paulo";
    const [alert, setAlert] = useState(true);

    const result: any = login(user, alert, setAlert);

    expect(result.type).toBe("Alert");
  });
});
