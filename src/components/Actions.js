export default function Actions() {
  const actionsContainer = document.createElement("div");
  actionsContainer.className = "actions-container";

  const notificationContainer = document.createElement("div");
  notificationContainer.className = "notification-container";

  const notificationImage = document.createElement("img");
  notificationImage.src = "notification-bing.svg";
  notificationImage.alt = "notification-logo";
  notificationContainer.appendChild(notificationImage);

  const messageContainer = document.createElement("div");
  messageContainer.className = "message-container";

  const messageImage = document.createElement("img");
  messageImage.src = "message-text.svg";
  messageImage.alt = "message-logo";
  messageContainer.appendChild(messageImage);

  const profileContainer = document.createElement("div");
  profileContainer.className = "profile-container";

  const galleryImageContainer = document.createElement("div");
  galleryImageContainer.className = "galleryimage-container";
  const galleryImage = document.createElement("img");
  galleryImage.src = "gallery.svg";
  galleryImage.alt = "gallery-logo";

  galleryImageContainer.appendChild(galleryImage);
  profileContainer.appendChild(galleryImageContainer);

  const actionText = document.createElement("span");
  actionText.textContent = "Mirie Kiritani";
  profileContainer.appendChild(actionText);

  const dropDown = document.createElement("img");
  dropDown.className="dropdown"
  dropDown.src="arrow-down.svg"
  dropDown.alt="arrow-down-logo"
  profileContainer.appendChild(dropDown)

  actionsContainer.appendChild(notificationContainer);
  actionsContainer.appendChild(messageContainer);
  actionsContainer.appendChild(profileContainer);
  return actionsContainer;
}
