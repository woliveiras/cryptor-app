import { useState } from "react";
import { Pressable, TextInput, View, Text } from "react-native";

import * as Clipboard from "expo-clipboard";

import { encryptor } from "./encrypt";

import { styles } from "./styles";

export default function Index() {
  const [inputText, setInputText] = useState("Text to be encrypted");
  const [outputText, setOutputText] = useState("");

  const { encrypt, decrypt } = encryptor();

  const onEncrypt = (text: string) => {
    setOutputText(encrypt(text));
  };

  const onDecrypt = (text: string) => {
    setOutputText(decrypt(text));
  };

  const copyToClipboard = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setInputText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setInputText}
        value={inputText}
      />

      <Text style={styles.output}>
        Output: {outputText ? outputText : "---"}
      </Text>

      <View>
        <Pressable
          style={styles.actionButton}
          onPress={() => onEncrypt(inputText)}
        >
          <Text style={styles.actionButtonText}>Encrypt!</Text>
        </Pressable>

        <Pressable
          style={styles.actionButton}
          onPress={() => {
            onDecrypt(inputText);
          }}
        >
          <Text style={styles.actionButtonText}>Decrypt!</Text>
        </Pressable>
      </View>

      <View style={styles.clipboardActions}>
        <Pressable
          style={styles.clipboardButton}
          onPress={() => copyToClipboard(outputText)}
        >
          <Text>Copy to clipboard</Text>
        </Pressable>

        <Pressable style={styles.clipboardButton} onPress={fetchCopiedText}>
          <Text>Paste from clipboard</Text>
        </Pressable>
      </View>
    </View>
  );
}
