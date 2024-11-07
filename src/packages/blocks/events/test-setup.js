// test-setup.js
import { configure } from "enzyme";
import { View } from "react-native";
import Adapter from "enzyme-adapter-react-16";

jest.mock("react-native/Libraries/Utilities/Platform", () => ({
  OS: "macos",
  select: () => null,
}));

jest.mock("react-native-datepicker", () => "DatePicker");

// jest.mock("@react-native-mapbox-gl/maps", () => ({
//   setAccessToken: jest.fn(),
//   locationManager: {
//     start: jest.fn(),
//     stop: jest.fn(),
//   },
//   MapView: jest.fn(),
//   Camera: jest.fn(),
//   UserLocation: jest.fn(),
//   MarkerView: jest.fn(),
// }));

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

// NativeModules.RNCAsyncStorage = {
//   getItem: jest.fn(),
//   setItem: jest.fn(),
//   removeItem: jest.fn(),
//   mergeItem: jest.fn(),
//   clear: jest.fn(),
//   getAllKeys: jest.fn(),
//   flushGetRequests: jest.fn(),
//   multiGet: jest.fn(),
//   multiSet: jest.fn(),
//   multiRemove: jest.fn(),
//   multiMerge: jest.fn(),
// };

configure({ adapter: new Adapter() });
