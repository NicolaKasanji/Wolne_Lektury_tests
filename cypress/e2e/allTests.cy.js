/// <reference types= "cypress"/> 

import { Login, LoginCheck } from "../tests/Login-page.cy.js";
import { DownloadFile, DownloadCheck } from "../tests/Home-page.cy.js"

describe("Log in to the app", () => {
    beforeEach(() => {
        Login()
        LoginCheck()
    })
    it("Download and file check", () => {
        DownloadFile()
        DownloadCheck()
    })
})

