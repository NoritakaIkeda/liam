import type { ComponentPropsWithoutRef, FC } from 'react'

type Props = ComponentPropsWithoutRef<'svg'>

export const Share: FC<Props> = (props) => {
  return (
    <svg
      role="img"
      aria-label="Share"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M8.19135 0.870947C8.25032 0.895347 8.30557 0.931516 8.35351 0.979454L11.0202 3.64612C11.2154 3.84138 11.2154 4.15797 11.0202 4.35323C10.8249 4.54849 10.5083 4.54849 10.3131 4.35323L8.49996 2.54011V9.99967C8.49996 10.2758 8.2761 10.4997 7.99996 10.4997C7.72382 10.4997 7.49996 10.2758 7.49996 9.99967V2.54011L5.68685 4.35323C5.49158 4.54849 5.175 4.54849 4.97974 4.35323C4.78448 4.15797 4.78448 3.84138 4.97974 3.64612L7.64641 0.979454C7.74404 0.881823 7.872 0.833008 7.99996 0.833008C8.06775 0.833008 8.1324 0.846501 8.19135 0.870947Z"
        fill="#000"
      />
      <path
        d="M2.66663 7.49967C2.94277 7.49967 3.16663 7.72353 3.16663 7.99967V13.333C3.16663 13.554 3.25442 13.766 3.4107 13.9223C3.56698 14.0785 3.77895 14.1663 3.99996 14.1663H12C12.221 14.1663 12.4329 14.0785 12.5892 13.9223C12.7455 13.766 12.8333 13.554 12.8333 13.333V7.99967C12.8333 7.72353 13.0571 7.49967 13.3333 7.49967C13.6094 7.49967 13.8333 7.72353 13.8333 7.99967V13.333C13.8333 13.8192 13.6401 14.2856 13.2963 14.6294C12.9525 14.9732 12.4862 15.1663 12 15.1663H3.99996C3.51373 15.1663 3.04741 14.9732 2.7036 14.6294C2.35978 14.2856 2.16663 13.8192 2.16663 13.333V7.99967C2.16663 7.72353 2.39048 7.49967 2.66663 7.49967Z"
        fill="#000"
      />
    </svg>
  )
}
