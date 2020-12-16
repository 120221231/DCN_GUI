const  sendStressTestingFormData = require("./gui_backend");
test("Returns about-us for english language", () => {

    expect(sendStressTestingFormData()).toBe(true);
});