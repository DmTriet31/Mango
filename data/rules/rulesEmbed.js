const { EmbedBuilder } = require("discord.js");

const ruleEmbeds = {
    respect: new EmbedBuilder()
        .setColor("#FF6F61")
        .setTitle("🤝 Tôn trọng lẫn nhau")
        .setDescription(
            "• Không xúc phạm, chửi bới, kỳ thị hay công kích cá nhân.\n" +
            "• Không gây drama, kích war hoặc khiêu khích người khác."
        ),

    spam: new EmbedBuilder()
        .setColor("FF0000")
        .setTitle("🚫 Không spam")
        .setDescription(
            "• Không spam tin nhắn, emoji, sticker.\n" +
            "• Không tag `@everyone` / `@here` bừa bãi.\n" +
            "• Không quảng cáo, gửi link khi chưa được Staff cho phép."
        ),

    content: new EmbedBuilder()
        .setColor("5865F2")
        .setTitle("📌 Nội dung phù hợp")
        .setDescription(
            "• Cấm nội dung 18+, NSFW, bạo lực, chính trị nhạy cảm.\n" +
            "• Không gửi virus, link lừa đảo hoặc nội dung độc hại."
        ),

    channels: new EmbedBuilder()
        .setColor("FFA500")
        .setTitle("📂 Đúng kênh – đúng mục đích")
        .setDescription(
            "• Chat đúng chủ đề của từng kênh.\n" +
            "• Không phá hoại hoặc làm loãng nội dung kênh."
        ),

    staff: new EmbedBuilder()
        .setColor("FF0000")
        .setTitle("🛡️ Tôn trọng Staff")
        .setDescription(
            "• Tuân theo hướng dẫn và quyết định của Admin / Mod.\n" +
            "• Không cãi lệnh, không giả mạo Staff."
        ),

    bugs: new EmbedBuilder()
        .setColor("#FF0000")
        .setTitle("🐞 Không lợi dụng bug")
        .setDescription(
            "• Không khai thác lỗi của Discord hoặc server.\n" +
            "• Nếu phát hiện bug, hãy báo ngay cho Staff."
        ),

    punishment: new EmbedBuilder()
        .setColor("#228B22")
        .setTitle("⚖️ Hình phạt")
        .setDescription(
            "• Vi phạm sẽ bị: **Nhắc nhở → Mute → Kick → Ban**.\n" +
            "• Staff có quyền xử lý ngay lập tức trong trường hợp nghiêm trọng.\n\n" +
            "🍀 Tham gia server đồng nghĩa với việc bạn đã đồng ý toàn bộ luật.\n" +
            "Chúc bạn có thời gian vui vẻ tại **Mango Discord** 🥭✨"
        )
};

module.exports = { ruleEmbeds };
