import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { BUSINESS } from "./lib/site";

export const alt = "Royal Emlak ve Gayrimenkul — Amasya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/royallogo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          position: "relative",
        }}
      >
        {/* Üstte ve altta marka altını şeritler */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 10,
            background: "#C5A253",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 10,
            background: "#C5A253",
          }}
        />

        <img
          src={logoSrc}
          alt=""
          width={460}
          height={307}
          style={{ objectFit: "contain" }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 700,
            color: "#0f172a",
            marginTop: 24,
            letterSpacing: -1,
          }}
        >
          {BUSINESS.name}
        </div>

        <div
          style={{
            display: "flex",
            width: 120,
            height: 4,
            background: "#C5A253",
            marginTop: 22,
            marginBottom: 22,
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#475569",
          }}
        >
          Amasya’da Güvenilir Gayrimenkul Danışmanlığı
        </div>
      </div>
    ),
    { ...size }
  );
}
