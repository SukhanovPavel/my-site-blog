export function Spinner() {
  return (
    <div className={'flex bg-inherit items-center justify-center'}>
      <div
        className={
          'animate-spin bg-inherit h-10 w-10 border-t-2 border-b-2 border-white dark:border-gray-50 rounded-full'
        }
      />
    </div>
  )
}
