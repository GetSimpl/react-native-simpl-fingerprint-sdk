import Simpl from "react-native-simpl-fingerprint-sdk";
import { useState, useEffect } from "react";

function useSimplFingerprint() {
  const [fingerprintData, setFingerprintData] = useState("");

  useEffect(() => {
    getSimplFingerprintData()
      .then((data) => setFingerprintData(data))
      .catch(console.warn);
  }, [fingerprintData]);

  const getSimplFingerprintData = () =>
    new Promise((res) =>
      Simpl.generateFingerprint(
        "<client-id>",
        "<phone-number>",
        "<email>",
        (payload) => res(payload)
      )
    );

  return fingerprintData;
}

export { useSimplFingerprint };
