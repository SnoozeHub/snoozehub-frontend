import { ProfilePic } from "./grpc_gen/common-messages";
import { useI18n } from "vue-i18n";

export async function useSerializeImages(
  photos: File[]
): Promise<ProfilePic[]> {
  if (photos == undefined) return [];
  const profilePics = photos?.map(async (photo: File) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(photo);
    await new Promise((resolve) => reader.addEventListener("load", resolve));
    return {
      image: new Uint8Array(reader.result as ArrayBuffer),
    } as ProfilePic;
  });
  return Promise.all(profilePics);
}

export const getImageUrl = (img: File) => {
  return URL.createObjectURL(img);
};

export async function useDeserializeImages(
  profilePics: Uint8Array[]
): Promise<File[]> {
  if (profilePics == undefined) return [];
  const photos = profilePics?.map(async (profilePic: Uint8Array, index) => {
    const blob = new Blob([profilePic]);
    return new File([blob], `profilePic${index}.png`);
  });
  return Promise.all(photos);
}

export function useCreateFileRules(minLength: number, maxLength: number) {
  const { t } = useI18n();

  return [
    (files: Array<File>) => {
      const lengthRequirement =
        files.length >= minLength && files.length <= maxLength;
      const sizeRequirement = files.reduce(
        (acc: boolean, curr: File) => acc && curr.size <= 512000,
        true
      );
      const typeRequirement = files.reduce(
        (acc: boolean, curr: File) => acc && curr.type == "image/png",
        true
      );
      return (
        (lengthRequirement && sizeRequirement && typeRequirement) ||
        t("file_type_size_error")
      );
    },
  ];
}
