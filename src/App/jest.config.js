module.exports = {
    collectCoverageFrom: [
        "**/*.{js,jsx}"
    ],
    moduleNameMapper: {
        "\\.(svg)$": "<rootDir>/../../__mocks__/svgMock.js"
    },
    setupFiles: [
        "./jest.setup.js"
    ],
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    testPathIgnorePatterns: [
        "\\.spec\\.js",
        // The following snapshot is now 360k lines long and breaks AppVeyor... solution: Delete and ignore it [THN]
        "./Documentation/utils/ComponentPreview/"
    ]
};
