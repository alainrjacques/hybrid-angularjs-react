
export interface IShellAngularjs {
  confirmBox: Function;
  createDialog: (obj: any) => {
    result: Promise<(Record<string, any> & { success: boolean }) | false>;
  };
}
