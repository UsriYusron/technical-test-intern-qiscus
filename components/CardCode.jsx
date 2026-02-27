import React from "react";
import styled from "styled-components";

const CardCode = () => {
  return (
    <StyledWrapper>
      <div className="vscode-window">
        <div className="title-bar">
          message.json
          <div className="window-controls">
            <div className="close" />
            <div className="minimize" />
            <div className="maximize" />
          </div>
        </div>
        <input
          className="i"
          type="radio"
          name="tab"
          id="tab-html"
          defaultChecked
        />
        <input className="i" type="radio" name="tab" id="tab-css" />
        <input className="i" type="radio" name="tab" id="tab-js" />
        <div className="tabs">
          <label className="l" htmlFor="tab-html">
            before.json
          </label>
          <label className="l" htmlFor="tab-css">
            after.json
          </label>
          <label className="l" htmlFor="tab-js">
            script.js
          </label>
        </div>
        <div className="code-panel">
          <div id="html-panel" className="panel">
            <div className="comment">{`// JSON tanpa file`}</div>

            <pre className="text-sm leading-6">
              {JSON.stringify(
                {
                  results: [
                    {
                      room: {
                        name: "Product A",
                        id: 12456,
                        image_url: "https://picsum.photos/id/237/200/300",
                        participant: [
                          { id: "admin@mail.com", name: "Admin", role: 0 },
                          { id: "agent@mail.com", name: "Agent A", role: 1 },
                          {
                            id: "customer@mail.com",
                            name: "king customer",
                            role: 2,
                          },
                        ],
                      },
                      comments: [
                        {
                          id: 885512,
                          type: "text",
                          message: "Selamat malam",
                          sender: "customer@mail.com",
                        },
                        {
                          id: 885513,
                          type: "text",
                          message: "Malam",
                          sender: "agent@mail.com",
                        },
                        {
                          id: 885514,
                          type: "text",
                          message: "Ada yang bisa saya bantu?",
                          sender: "agent@mail.com",
                        },
                        {
                          id: 885515,
                          type: "text",
                          message:
                            "Saya ingin mengirimkan bukti pembayaran, karena diaplikasi selalu gagal",
                          sender: "customer@mail.com",
                        },
                        {
                          id: 885516,
                          type: "text",
                          message:
                            "Baik, silahkan kirimkan lampiran bukti pembayarannya",
                          sender: "agent@mail.com",
                        },
                      ],
                    },
                  ],
                },
                null,
                2,
              )}
            </pre>
          </div>
          <div id="css-panel" className="panel">
            <div className="comment">{`// JSON dengan kirim file`}</div>

            <pre className="text-sm leading-6">
              {JSON.stringify(
                {
                  results: [
                    {
                      room: {
                        name: "Product A",
                        id: 12456,
                        image_url: "https://picsum.photos/id/237/200/300",
                        participant: [
                          {
                            id: "admin@mail.com",
                            name: "Admin",
                            role: 0,
                          },
                          {
                            id: "agent@mail.com",
                            name: "Agent A",
                            role: 1,
                          },
                          {
                            id: "customer@mail.com",
                            name: "king customer",
                            role: 2,
                          },
                        ],
                      },
                      comments: [
                        {
                          id: 885512,
                          type: "text",
                          message: "Selamat malam",
                          sender: "customer@mail.com",
                        },
                        {
                          id: 885517,
                          type: "image",
                          message: "Bukti pembayaran",
                          file: {
                            url: "https://example.com/uploads/payment.jpg", 
                            name: "payment.jpg",
                            size: 245678,
                            mime_type: "image/jpeg",
                            thumbnail:
                              "https://example.com/uploads/thumb_payment.jpg",
                          },
                          sender: "customer@mail.com",
                        },

                        {
                          id: 885518,
                          type: "video",
                          message: "Video unboxing",
                          file: {
                            url: "https://example.com/uploads/video.mp4",
                            name: "video.mp4",
                            size: 5423456,
                            mime_type: "video/mp4",
                            thumbnail:
                              "https://example.com/uploads/video_thumb.jpg",
                          },
                          sender: "customer@mail.com",
                        },

                        {
                          id: 885519,
                          type: "document",
                          message: "Invoice pembelian",
                          file: {
                            url: "https://example.com/uploads/invoice.pdf",
                            name: "invoice.pdf",
                            size: 845123,
                            mime_type: "application/pdf",
                          },
                          sender: "agent@mail.com",
                        },
                      ],
                    },
                  ],
                },
                null,
                2,
              )}
            </pre>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .vscode-window-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1e1e1e;
    font-family: "Fira Code", monospace;
  }

  .vscode-window {
    width: 550px;
    max-width: 95vw;
    height: 520px;
    background: #1e1e1e;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid #333;
    font-family: "Fira Code", monospace;
  }

  .vscode-window .title-bar {
    height: 32px;
    background: #2c2c3e;
    display: flex;
    align-items: center;
    padding: 0 12px;
    color: #ccc;
    font-size: 0.85em;
  }

  .vscode-window .window-controls {
    margin-left: auto;
    display: flex;
    gap: 8px;
  }

  .vscode-window .window-controls div.close,
  .vscode-window .window-controls div.minimize,
  .vscode-window .window-controls div.maximize {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .vscode-window .window-controls div.close:hover,
  .vscode-window .window-controls div.minimize:hover,
  .vscode-window .window-controls div.maximize:hover {
    transform: scale(1.2);
  }
  .vscode-window .close {
    background: #ff5f56;
  }
  .vscode-window .minimize {
    background: #ffbd2e;
  }
  .vscode-window .maximize {
    background: #27c93f;
  }

  .vscode-window .tabs {
    display: flex;
    background: #252536;
    border-bottom: 1px solid #444;
  }

  .vscode-window .tabs label.l {
    padding: 8px 18px;
    color: #ccc;
    cursor: pointer;
    font-size: 0.9em;
    transition:
      background 0.2s,
      color 0.2s;
  }

  .vscode-window .tabs label.l:hover {
    background: #2c2c3e;
    color: #fff;
  }

  .vscode-window input.i[name="tab"] {
    display: none;
  }

  .vscode-window #tab-html:checked ~ .tabs label.l[for="tab-html"],
  .vscode-window #tab-css:checked ~ .tabs label.l[for="tab-css"],
  .vscode-window #tab-js:checked ~ .tabs label.l[for="tab-js"] {
    background: #1e1e2f;
    color: #fff;
    border-bottom: 2px solid #007acc;
  }

  .vscode-window .code-panel {
    flex: 1;
    background: #1e1e2f;
    color: #d4d4d4;
    padding: 15px;
    font-family: "Fira Code", monospace;
    font-size: 0.9em;
    overflow-y: auto;
    line-height: 1.4em;
  }

  .vscode-window .panel {
    display: none;
  }

  .vscode-window #tab-html:checked ~ .code-panel #html-panel,
  .vscode-window #tab-css:checked ~ .code-panel #css-panel,
  .vscode-window #tab-js:checked ~ .code-panel #js-panel {
    display: block;
  }

  .vscode-window .keyword {
    color: #569cd6;
  }
  .vscode-window .string {
    color: #d69d85;
  }
  .vscode-window .comment {
    color: #6a9955;
    font-style: italic;
  }
  .vscode-window .attr {
    color: #9cdcfe;
  }
  .vscode-window .value {
    color: #dcdcaa;
  }
`;

export default CardCode;
